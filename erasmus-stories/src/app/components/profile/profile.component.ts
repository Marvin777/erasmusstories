import {Component, OnInit} from "@angular/core";
import {User} from "../../entities/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../game-card.component.css']
})
export class ProfileComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService) {
    this.user = this.userService.getLoggedInUser();
  }

  ngOnInit() {
  }

}
