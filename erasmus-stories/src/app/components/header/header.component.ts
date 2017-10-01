import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {UserNotification} from "../../entities/Notification";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private notifications: UserNotification[] = [];

  constructor(private router: Router, private userService: UserService, private notificationService: NotificationService) {
    this.notifications = this.notificationService.getNotificationsOfUser(this.userService.getLoggedInUser().id);
    this.notificationService.newNotification.subscribe(
      (notifications: UserNotification[]) => this.notifications = notifications
    );
  }

  ngOnInit() {
  }

  onNavigate(s: String) {
    this.router.navigate([s]);
  }

  onLogout() {
    this.userService.logout();
  }
}
