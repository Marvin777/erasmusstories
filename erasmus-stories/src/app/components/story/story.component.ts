import {Component, Input, OnInit} from '@angular/core';
import {Story} from "../../entities/Story";
import {StoryService} from "../../services/story.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input() private story: Story;
  userId: number;
  //Which Thumb is selected?
  thumbSelected: string;
  scoring:number;
  constructor(private storyService: StoryService, private userService: UserService) {

   }

  toggleVote(value: string) {
    if (value == "thumbUp") {
      this.storyService.voteUp(this.story.id, this.userId)
    } else {
      this.storyService.voteDown(this.story.id, this.userId);
    }
  }

  ngOnInit() {
    //@todo no update on user logout
    this.userId = this.userService.getLoggedInUser().id;
    if (this.story.voteDownUsers.indexOf(this.userId) !== -1) this.thumbSelected = "thumbDown";
    else if (this.story.voteUpUsers.indexOf(this.userId) !== -1) this.thumbSelected = "thumbUp";
    this.scoring = this.story.scoring;
  }

}
