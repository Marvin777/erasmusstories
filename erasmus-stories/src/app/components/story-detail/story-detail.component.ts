import {Component, Input, OnInit} from '@angular/core';
import loremIpsum from 'lorem-ipsum';
import * as _ from 'lodash';
import {StoryService} from "../../services/story.service";
import {Story} from "../../entities/Story";


@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
  providers: [StoryService],
})
export class StoryDetailComponent implements OnInit {
  @Input() private storyId:string;
  story: Story;
  constructor(private storyService: StoryService) {
  }

  ngOnInit() {
    this.story = this.storyService.getStory(this.storyId);
  }
}

