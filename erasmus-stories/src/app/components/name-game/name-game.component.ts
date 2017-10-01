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
  private loggedInUser: User = null;

  constructor(private userService: UserService, private gameService: GameService) {
  }


  ngOnInit() {
    this.userService.usersInitialized.subscribe(() => this.initGame());
  }

  initGame() {
    this.loggedInUser = this.userService.getLoggedInUser();
    if (this.loggedInUser != null) {
      this.user = this.gameService.getNextUserForCard();
      this.nameList = this.gameService.getNameOptions(this.user);
      console.log("[NameGameComp] start Game")
    }
    
  }

  showSolution(selected: String) {
    this.showPicture = false;
    if (this.user.name == selected) {
      this.gameService.choseCorrectly(this.user.id);
    }
  }

  showNextCard() {
    this.user = this.gameService.getNextUserForCard();
    this.nameList = this.gameService.getNameOptions(this.user);
    this.showPicture = true;
  }



}
