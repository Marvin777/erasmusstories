import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "../entities/User";

@Injectable()
export class GameService {

  constructor(private userService: UserService) {
  }

  getNextUserForCard(): User {
    let loggedInUser = this.userService.getLoggedInUser();

    let nextID = 0;
    do {
      nextID = this.getRandomInt(this.userService.getHighestID());
    } while (loggedInUser.hasGuessedRight.includes(nextID));

    loggedInUser.hasSeen.push(nextID);
    this.userService.saveChangesForLoggedInUser();

    return this.userService.getUser(nextID);
  }

  /**
   * liefert eine Liste mit drei Namen als Auswahlmöglichkeit
   */
  getNameOptions(user: User): Array<String>{
    let genderBasedUsernameList = this.userService.getGenderBasedList(user.gender);

    let nameList = [];
    nameList.push(genderBasedUsernameList[this.getRandomInt(genderBasedUsernameList.length)].name);
    nameList.push(genderBasedUsernameList[this.getRandomInt(genderBasedUsernameList.length)].name);
    nameList.push(user.name);


    return nameList;
  }


  private getRandomInt(max:number) : number{
    return Math.floor(Math.random() * max);
  }

  choseCorrectly(userID: number){
    let loggedInUser = this.userService.getLoggedInUser();
    loggedInUser.hasGuessedRight.push(userID);
    loggedInUser.gameScore+=1;
    this.userService.saveChangesForLoggedInUser();
  }

}
