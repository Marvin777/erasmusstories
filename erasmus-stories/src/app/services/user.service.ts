import {Injectable} from "@angular/core";
import {User} from "../entities/User";
import {AngularFireDatabase} from "angularfire2/database";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {DataService} from "./dataService";

@Injectable()
export class UserService {

  private loggedInUser: User;
  private databaseUrl: string = "https://erasmusstories-f269c.firebaseio.com/students.json";
  private users = [];


  constructor(private http: Http, private database: AngularFireDatabase, private dataService: DataService) {
    this.initData();
    this.fetchData().subscribe(
      (users: User[]) => {
        if (users != null) {
          this.users = users;
        }
      });
  }

  initData() {
    this.users = this.dataService.getUsers();
    this.loggedInUser = this.users[0];
  }

  fetchData() {
    return this.http.get(this.databaseUrl).map(response => response.json());
  }

  signIn(newUser: User) {
    let alreadySignedUpUser = this.users.filter(user => user.mail == newUser.mail);
    if (alreadySignedUpUser.length == 0) {
      this.users.push(newUser);
      this.loggedInUser = newUser;
      this.storeData().subscribe();
      console.log("newUser");
    } else {
      this.loggedInUser = alreadySignedUpUser[0];
      console.log("alreadySignedUp");
    }
  }

  logout() {
    this.loggedInUser = null;
  }

  getUser(userID: number): User {
    return this.users[userID];
  }

  getHighestID():number{
    return this.users.length;
  }

  getGenderBasedList(gender: String): Array<User> {
    return this.users.filter(user => user.gender == gender);
  }

  saveChangesForLoggedInUser(){
    this.users[this.loggedInUser.id] = this.loggedInUser;
    this.storeData().subscribe();
  }

  getLoggedInUser():User{ return this.loggedInUser; }


  storeData() {
    this.database.object('/students').remove();
    const body = JSON.stringify(this.users);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.databaseUrl, body);
  }




}
