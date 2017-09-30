import {Injectable} from "@angular/core";
import {User} from "../entities/User";

@Injectable()
export class UserService {


  private urlPath: string = "https://www.schoenheit2go.at/wp-content/uploads/2014/10/frau-mit-schoenen-haaren.jpg";
  private loggedInUser: User = new User(0, "Stephie", "f", "Germany", "Dortmund", this.urlPath, "text text text", 0, 0, [], [], []); //defaultWert


  private users = [
    new User(0, "Stephie", "f", "Germany", "Dortmund", this.urlPath, "text text text", 0, 0, [], [], []),
    new User(1, "Nadine", "f", "Germany", "Giessen", this.urlPath, "text text text", 0, 0, [], [], []),
    new User(2, "Elena", "f", "Germany", "Giessen", this.urlPath, "text text text", 0, 0, [], [], []),
    new User(3, "Sarah", "f", "Germany", "Giessen", this.urlPath, "text text text", 0, 0, [], [], []),
    new User(4, "Lola", "f", "Germany", "Giessen", this.urlPath, "text text text", 0, 0, [], [], []),
    new User(5, "Alex", "f", "Germany", "Giessen", this.urlPath, "text text text", 0, 0, [], [], []),
    new User(6, "Felix", "m", "Germany", "Giessen", this.urlPath, "text text text", 0, 0, [], [], []),
    new User(7, "Marvin", "m", "Germany", "Giessen", this.urlPath, "text text text", 0, 0, [], [], []),
    new User(8, "Philipp", "m", "Germany", "Giessen", this.urlPath, "text text text", 0, 0, [], [], []),];

  constructor() {
  }

  signIn(){} //TODO firebase

  login(){
    //loggedInUser setzen//TODO firebase
  }

  logout(){}

  getUser(userID: number): User {
    return this.users[userID]; //TODO firebase
  }

  getHighestID():number{
    return this.users.length; //TODO firebase
  }

  getGenderBasedList(gender: String): Array<User> {
    return this.users; //TODO
  }

  saveChangesForLoggedInUser(){
    //Datenbankeintrag vom eingeloggtem User mit Datenobjekt this.loggedInUser überschreiben
    //TODO firebase
  }

  getLoggedInUser():User{ return this.loggedInUser; }

}
