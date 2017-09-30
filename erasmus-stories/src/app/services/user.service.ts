import {Injectable} from "@angular/core";
import {User} from "../entities/User";

@Injectable()
export class UserService {

  private loggedInUser: User = new User(0, "Stephie", "f", "Germany", "Dortmund", 0, 0, [], [], []); //defaultWert

  constructor() {
  }

  signIn(){} //TODO firebase

  login(){
    //loggedInUser setzen//TODO firebase
  }

  logout(){}

  getUser(userID: string):User{
    return null; //TODO firebase
  }

  getHighestID():number{
    return 10; //TODO firebase
  }

  saveChangesForLoggedInUser(){
    //Datenbankeintrag vom eingeloggtem User mit Datenobjekt this.loggedInUser überschreiben
    //TODO firebase
  }

  getLoggedInUser():User{ return this.loggedInUser; }

}
