import {Component, OnInit} from "@angular/core";
import {GameService} from "../../services/game.service";
import {User} from "../../entities/User";

@Component({
  selector: 'app-name-game',
  templateUrl: './name-game.component.html',
  styleUrls: ['./name-game.component.css']
})
export class NameGameComponent implements OnInit {

  private user: User;
  private showPicture: boolean = true;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.user = this.gameService.getNextUserForCard();
  }

  showSolution() {
    this.showPicture = false;
  }

  showNextCard() {
    this.user = this.gameService.getNextUserForCard();
    this.showPicture = true;
  }




}
