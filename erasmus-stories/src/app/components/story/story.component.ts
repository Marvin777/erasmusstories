import {Component, Input, OnInit} from "@angular/core";
import {Story} from "../../entities/Story";
import {StoryService} from "../../services/story.service";
import {UserService} from "../../services/user.service";
import {User} from "../../entities/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input() private story: Story;
  author: User;
  userId: number;
  thumbSelected: string;

  constructor(private storyService: StoryService, private userService: UserService, private router: Router) {
  }

  toogleVote(value: string) {
    this.toggle(value);
    this.story.scoring = this.story.voteUpUsers.length + 2 - this.story.voteDownUsers.length;
  }

  toggle(value: string) {
    if (this.story.voteDownUsers.includes(this.userId)) {
      this.story.voteDownUsers.pop();
      this.thumbSelected = "";
      return;
    }
    if (this.story.voteUpUsers.includes(this.userId)) {
      this.story.voteUpUsers.pop();
      this.thumbSelected = "";
      return;
    }

    if (value == "thumbUp") {
      this.story.voteUpUsers.push(this.userId);
    } else {
      this.story.voteDownUsers.push(this.userId);
    }
  }


  ngOnInit() {
    this.author = this.userService.getUser(this.story.authorUserId);
    this.userId = this.userService.getLoggedInUser().id;
    if (!this.story.voteDownUsers) {
      this.story.voteDownUsers = [];
    }
    if (!this.story.voteUpUsers) {
      this.story.voteUpUsers = [];
    }

    if (this.story.voteDownUsers.includes(this.userId)) {
      this.thumbSelected = "thumbDown";
    }
    else if (this.story.voteUpUsers.includes(this.userId)) {
      this.thumbSelected = "thumbUp";
    }
  }

}
