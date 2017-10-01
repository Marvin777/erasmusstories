import {Component, Input, OnInit} from "@angular/core";
import {StoryService} from "../../services/story.service";
import {Story} from "../../entities/Story";
import {User} from "../../entities/User";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
  providers: [StoryService],
})
export class StoryDetailComponent implements OnInit {
  @Input() story: Story;
  author: User;

  constructor(private storyService: StoryService, private userService: UserService) {
  }

  ngOnInit() {
    this.author = this.userService.getUser(this.story.authorUserId);
  }
}

