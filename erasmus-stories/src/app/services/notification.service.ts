import {EventEmitter, Injectable, Output} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {UserNotification} from "../entities/Notification";
import {User} from "../entities/User";
import {UserService} from "./user.service";

@Injectable()
export class NotificationService {


  private databaseUrl: string = "https://erasmusstories-f269c.firebaseio.com/notifications.json";
  private notifications: UserNotification[] = [];
  private loggedInUser: User;
  @Output() newNotification = new EventEmitter<UserNotification[]>();

  constructor(private http: Http, private database: AngularFireDatabase, private userService: UserService) {
    this.getData();
    this.userService.usersInitialized.subscribe(() => this.initNotifications());
  }

  getData() {
    let observable = this.database.list('notifications');
    observable.subscribe(items => {
      items.forEach(item => {
        this.notifications.push(item);
      });
      this.newNotification.emit();
    });
  }

  saveData() {
    const itemRef = this.database.object('notifications');
    itemRef.set(this.notifications);
  }

  initNotifications() {
    console.log("[NotificationService] init Notifications ")
    this.loggedInUser = this.userService.getLoggedInUser();
    this.newNotification.emit()
  }

  getNotificationsOfLoggedInUser() {
    if (this.loggedInUser == null) {
      return [];
    }
    return this.notifications.filter(mssg => {
      return this.loggedInUser.id == mssg.userId;
    });
  }



  createGameScoreAwardNotificationForUser(userId: number, gameScore: number) {
    let mssg = new UserNotification(
      this.notifications.length,
      userId,
      Date.now(),
      "Congrats. You won your first award. You know " + gameScore + " Erasmus names.",
      "whatshot"
    );
    this.notifications.push(mssg);
    if (this.loggedInUser.id == userId) {
      this.newNotification.emit();
    }
    this.saveData();
  }



}
