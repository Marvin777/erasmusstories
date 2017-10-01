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
    this.loggedInUser = this.userService.getLoggedInUser();
    this.fetchData().subscribe(
      (notifications: UserNotification[]) => {
        if (notifications != null) {
          this.notifications = notifications;
          if (this.loggedInUser != null) {
            this.newNotification.emit(this.getNotificationsOfUser(this.loggedInUser.id))
          }
        }
      });
  }

  getNotificationsOfUser(userId: number): UserNotification[] {
    if (this.notifications == null) {
      return [];
    }
    return this.notifications.filter(mssg => {
      return userId == mssg.userId;
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
      this.newNotification.emit(this.getNotificationsOfUser(userId));
    }
    this.storeData().subscribe();
  }

  fetchData() {
    return this.http.get(this.databaseUrl).map(response => response.json());
  }

  storeData() {
    const body = JSON.stringify(this.notifications);
    this.database.object('/notifications').remove();
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.databaseUrl, body);
  }


}
