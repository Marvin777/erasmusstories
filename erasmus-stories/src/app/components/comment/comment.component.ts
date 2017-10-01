import {Component, Input, OnInit} from '@angular/core';
import {Story} from "../../entities/Story";
import {StoryService} from "../../services/story.service";
import {UserService} from "../../services/user.service";
import {User} from "../../entities/User";

@Component({
  selector: 'app-story',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() private story: Story;
  userId: number;
  author: User;
  //Which Thumb is selected?
  thumbSelected: string;
  scoring: number;

  constructor(private storyService: StoryService, private userService: UserService) {
  }

  ngOnInit() {
  }

}
