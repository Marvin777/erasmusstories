import {Injectable} from "@angular/core";
import {User} from "../entities/User";
import {AngularFireDatabase} from "angularfire2/database";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Router} from "@angular/router";
import {DataService} from "./dataService";

@Injectable()
export class UserService {

  private loggedInUser: User;
  private databaseUrl: string = "https://erasmusstories-f269c.firebaseio.com/students.json";
  private users = [];

  constructor(private http: Http, private database: AngularFireDatabase, private router: Router, private dataService: DataService) {
    this.initData();
    this.fetchData().subscribe((data) => console.log("fetched")); //TODO mapping
  }

  initData() {
    this.users = this.dataService.getUsers();
    this.loggedInUser = this.users[0];
  }

  saveData() {
    this.storeData().subscribe();
  }

  fetchData() {
    return this.http.get(this.databaseUrl).map(response => response.json());
  }

  signIn(user: User) {
    this.users.push(user);
    this.loggedInUser = user;
    this.storeData().subscribe();
  }

  login() { //TODO button einbinden
    //loggedInUser setzen//TODO
  }

  logout() {
    this.loggedInUser = null;
    this.router.navigate(['login']);
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
