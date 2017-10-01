import {EventEmitter, Injectable, Output} from "@angular/core";
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

  private userObservable;

  @Output() usersInitialized = new EventEmitter();

  constructor(private http: Http, private database: AngularFireDatabase, private dataService: DataService) {
    this.fetchData().subscribe(
      (users: User[]) => {
        if (users != null) {
          this.users = users;
          this.loggedInUser = users[0];
          this.usersInitialized.emit();
          console.log("[UserService] retrieved " + this.users.length + " users");
          this.getData();
        }
      });

    this.getData();
  }

  fetchData() {
    return this.http.get(this.databaseUrl).map(response => response.json());

  }

  getData() {
    console.log("[UserService] start fetching for Data");
    this.userObservable = this.database.list('students');
    this.userObservable.subscribe(items => {
      items.forEach(item => {
        if (!this.users.includes(item)) {
          this.users.push(item);
        }
      });
      this.loggedInUser = this.users[0];
    });
  }

  initData() {
    this.database.object('/students').remove();
    const itemRef = this.database.object('students');
    itemRef.set(this.dataService.getUsers());
  }


  saveData() {
    //this.database.object('/students').remove();
    //const itemRef = this.database.object('students');
    //itemRef.set(this.users);
  }

  saveChangesForLoggedInUser() {
    this.users[this.loggedInUser.id] = this.loggedInUser;
    console.log("save");
    this.saveData();
  }


  signIn(newUser: User) {
    let alreadySignedUpUser = this.users.filter(user => user.mail == newUser.mail);
    if (alreadySignedUpUser.length == 0) {
      this.users.push(newUser);
      this.loggedInUser = newUser;
      this.saveData();
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

  getLoggedInUser():User{ return this.loggedInUser; }



}
