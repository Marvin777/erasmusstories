import {Component, OnInit} from "@angular/core";
import {GameService} from "../../services/game.service";
import {User} from "../../entities/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-name-game',
  templateUrl: './name-game.component.html',
  styleUrls: ['../game-card.component.css']
})
export class NameGameComponent implements OnInit {

  private user: User;
  private nameList = [];
  private showPicture: boolean = true;
  private loggedInUser: User;
  constructor(private gameService: GameService, private userService: UserService) {
  }


  ngOnInit() {
    this.user = this.gameService.getNextUserForCard();
    this.nameList = this.gameService.getNameOptions(this.user);
    this.loggedInUser = this.userService.getLoggedInUser();
  }

  showSolution(selected: String) {
    this.showPicture = false;
    if (this.user.name == selected) {
      this.gameService.choseCorrectly(this.user.id);
    }
  }

  showNextCard() {
    console.log("NEXT");
    this.user = this.gameService.getNextUserForCard();
    this.nameList = this.gameService.getNameOptions(this.user);
    this.showPicture = true;
  }



}
