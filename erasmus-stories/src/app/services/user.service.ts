import {Injectable} from "@angular/core";
import {User} from "../entities/User";

@Injectable()
export class UserService {


  private urlPath: string = "https://www.schoenheit2go.at/wp-content/uploads/2014/10/frau-mit-schoenen-haaren.jpg";
  private loggedInUser: User = new User(0, "Stephie", "f", "Germany", "Dortmund", this.urlPath, 0, 0, [], [], []); //defaultWert

  constructor() {
  }

  signIn(){} //TODO firebase

  login(){
    //loggedInUser setzen//TODO firebase
  }

  logout(){}

  getUser(userID: number): User {
    return new User(1, "Nadine", "f", "Germany", "Giessen", this.urlPath, 0, 0, [], [], []); //TODO firebase
  }

  getHighestID():number{
    return 1; //TODO firebase
  }

  saveChangesForLoggedInUser(){
    //Datenbankeintrag vom eingeloggtem User mit Datenobjekt this.loggedInUser überschreiben
    //TODO firebase
  }

  getLoggedInUser():User{ return this.loggedInUser; }

}
