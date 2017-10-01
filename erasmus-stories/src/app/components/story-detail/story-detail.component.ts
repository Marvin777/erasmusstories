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
export class StoryListComponent implements OnInit {
  @Input() private story:Story;
  constructor(storyService: StoryService) {
  }

  ngOnInit() {
  }
}

