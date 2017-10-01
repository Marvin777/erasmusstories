import {Component, Input, OnInit} from '@angular/core';
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
  userId: number;
  author: User;
  //Which Thumb is selected?
  thumbSelected: string;
  scoring: number;

  constructor(private storyService: StoryService, private userService: UserService, private router: Router) {
  }

  toggleVote(value: string) {
    if (value == "thumbUp") {
      this.storyService.voteUp(this.story.id, this.userId)
    } else {
      this.storyService.voteDown(this.story.id, this.userId);
    }
  }
  openDetail(story: Story){
    this.router.navigate(['/storyDetail', { story: story.id}]);
  }

  ngOnInit() {
    //@todo no update on user logout
    this.userId = 2;
    if (this.story.voteDownUsers.indexOf(this.userId) !== -1) this.thumbSelected = "thumbDown";
    else if (this.story.voteUpUsers.indexOf(this.userId) !== -1) this.thumbSelected = "thumbUp";
    this.scoring = this.story.scoring;
    this.author = this.userService.getUser(this.story.authorUserId);
  }

}
