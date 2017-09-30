import { Component, OnInit } from '@angular/core';
import loremIpsum from 'lorem-ipsum';
import * as _ from 'lodash';
const MOCK_STORIES: Object[]=[{
  id: _.uniqueId('story_'),
  authorUserId: _.uniqueId('user_'),
  text: loremIpsum(500),
  date: new Date("February 4, 2016 10:13:00")
}];
@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  title = "New Stories";
  stories = MOCK_STORIES;

  constructor() {
  }

  ngOnInit() {
  }

}
