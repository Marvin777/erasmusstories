import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {User} from "../../../entities/User";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() private user: User;
  @Output() clicked = new EventEmitter<string>();
  private loggedInUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loggedInUser = this.userService.getLoggedInUser();
  }

  onNextClick() {
    console.log("nextnext");
    this.clicked.emit("next");
  }

}
