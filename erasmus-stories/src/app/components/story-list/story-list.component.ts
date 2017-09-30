import { Component, OnInit } from '@angular/core';
import loremIpsum from 'lorem-ipsum';
import * as _ from 'lodash';
const MOCK_STORIES: Object[]=[{
  id: _.uniqueId('story_'),
  authorUserId: _.uniqueId('user_'),
  text: loremIpsum(500),
  date: new Date("September 30, 2017 10:13:00"),
  scoring: 2
},{
  id: _.uniqueId('story_'),
  authorUserId: _.uniqueId('user_'),
  text: loremIpsum(500),
  date: new Date("September 29, 2016 11:13:00"),
  scoring: 9
},
  {
    id: _.uniqueId('story_'),
    authorUserId: _.uniqueId('user_'),
    text: loremIpsum(500),
    date: new Date("September 30, 2016 15:13:00"),
    scoring: 2
  },
  {
    id: _.uniqueId('story_'),
    authorUserId: _.uniqueId('user_'),
    text: loremIpsum(500),
    date: new Date("September 30, 2016 17:13:00"),
    scoring: 2
  },
  {
    id: _.uniqueId('story_'),
    authorUserId: _.uniqueId('user_'),
    text: loremIpsum(500),
    date: new Date("September 30, 2016 13:13:00"),
    scoring: 6
  }
];
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
