import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
const MOCK_STORIES: Object[]=[{
  id: _.uniqueId('story_'),
  authorID: _.uniqueId('user_'),
  text: "test story, mega Awesome"
}];
@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  title = "New Stories";
  stories = MOCK_STORIES;
  constructor() { }

  ngOnInit() {
  }

}
