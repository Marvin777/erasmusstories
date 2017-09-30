import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "../entities/User";

@Injectable()
export class GameService {

  constructor(private userService: UserService) {
  }

  getNextUserForCard(): User {
    /**    let loggedInUser = this.userService.getLoggedInUser();

    let nextID;
    do {
      nextID = this.getRandomInt(this.userService.getHighestID());
    }while(!loggedInUser.hasGuessedRight.includes(nextID));

    Array.prototype.push.apply(loggedInUser.hasSeen, nextID);
    this.userService.saveChangesForLoggedInUser();
     **/
    return this.userService.getUser(0);
  }

  /**
   * liefert eine Liste mit drei Namen als Auswahlmöglichkeit
   */
  getNameOptions(user: User): Array<String>{
      //getAllUsernamesWithGender user.gender //TODO firebase
    let genderBasedUsernameList = ["Sina", "Sarah"];

      let nameList = [];
    //Array.prototype.push.apply(nameList, genderBasedUsernameList[this.getRandomInt(genderBasedUsernameList.length)]);
    //Array.prototype.push.apply(nameList, genderBasedUsernameList[this.getRandomInt(genderBasedUsernameList.length)]);
    //Array.prototype.push.apply(nameList, user.name);

    //return nameList;
    return genderBasedUsernameList
  }


  private getRandomInt(max:number) : number{
    return Math.floor(Math.random() * (max + 1));
  }

  choseCorrectly(userID: number){
    let loggedInUser = this.userService.getLoggedInUser();
    Array.prototype.push.apply(loggedInUser.hasGuessedRight, userID);
    loggedInUser.gameScore+=1;
    this.userService.saveChangesForLoggedInUser();
  }

}
