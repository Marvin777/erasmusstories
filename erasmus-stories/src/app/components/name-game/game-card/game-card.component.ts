import {Component, Input, OnInit} from "@angular/core";
import {User} from "../../../entities/User";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() private user: User;

  constructor() {
  }

  ngOnInit() {
  }

}
