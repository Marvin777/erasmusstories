import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {UserNotification} from "../../entities/Notification";
import {NotificationService} from "../../services/notification.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  private notifications: UserNotification[] = [];
  private isAuthenticated: boolean = true;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService,
              private notificationService: NotificationService) {
    // this.authService.isAuthenticated().subscribe(authStatus => this.isAuthenticated = authStatus);

    this.notificationService.newNotification.subscribe(
      () => this.notifications = this.notificationService.getNotificationsOfLoggedInUser()
    );
  }

  onPowerButton() {
    if (this.isAuthenticated) {
      this.authService.logout();
      this.isAuthenticated = false;
    }
  }

  ngOnInit() {
  }
  onNavigate(s: String) {
    this.router.navigate([s]);
  }

}
