import {EventEmitter, Injectable, Output} from "@angular/core";
import * as _ from "lodash";
import loremIpsum from 'lorem-ipsum';
import {Http} from "@angular/http";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import {Story} from "../entities/Story";
import {Observable} from "rxjs/Observable";

const MOCK_STORIES: Story[] = [{
  id: _.uniqueId('story_'),
  authorUserId: 2,
  text: loremIpsum(500),
  date: new Date("September 30, 2017 10:13:00"),
  scoring: 2,
  voteUpUsers: [],
  voteDownUsers: [],
  comments: []
}, {
  id: _.uniqueId('story_'),
  authorUserId: 4,
  text: loremIpsum(500),
  date: new Date("September 29, 2016 11:13:00"),
  scoring: 9,
  voteUpUsers: [],
  voteDownUsers: [],
  comments: []
},
  {
    id: _.uniqueId('story_'),
    authorUserId: 6,
    text: loremIpsum(500),
    date: new Date("September 30, 2016 15:13:00"),
    scoring: 2,
    voteUpUsers: [],
    voteDownUsers: [],
    comments: []
  },
  {
    id: _.uniqueId('story_'),
    authorUserId: 7,
    text: loremIpsum(500),
    date: new Date("September 30, 2016 17:13:00"),
    scoring: 2,
    voteUpUsers: [],
    voteDownUsers: [],
    comments: []
  },
  {
    id: _.uniqueId('story_'),
    authorUserId: 8,
    text: loremIpsum(500),
    date: new Date("September 30, 2016 13:13:00"),
    scoring: 6,
    voteUpUsers: [],
    voteDownUsers: [],
    comments: []
  }
];

@Injectable()
export class StoryService {
  stories: Story[] = [];
  //For reading
  itemsObservable: Observable<Story[]>;
  //For writing
  itemsRef: FirebaseObjectObservable<any>;
  otherStories: Story[];
  @Output() initialized = new EventEmitter();


  constructor(private http: Http, private database: AngularFireDatabase) {
    this.getData();
  }

  saveData() {
    let itemsRef = this.database.object('stories');
    itemsRef.set(this.stories);
  }

  initData() {
    let itemsRef = this.database.object('stories');
    itemsRef.set(MOCK_STORIES);
  }

  getData() {
    let itemsObservable = this.database.list('stories');
    itemsObservable.subscribe(storyItems => {
      storyItems.forEach(storyItem => this.stories.push(storyItem));
      this.initialized.emit();
    });
  }


  //@todo Server Connection
  getStories(): Story[] {
    return this.stories;
  }

  voteUp(storyId: string, userId: number): boolean {
    let votedStory: Story;
    votedStory = this.stories.find(story => story.id === storyId);
    if (votedStory) {
      if (votedStory.voteUpUsers.indexOf(userId) !== -1) {
        return false;
      } else {
        votedStory.voteUpUsers.push(userId);
        //console.log(votedStory.voteUpUsers);
        votedStory.scoring++;
        return true;
      }
    }
  }

  getStory(storyId: string) {
    return this.stories.find(story => story.id === storyId)
  }

  getVoteUps(storyId: string) {
    return this.stories.find(story => story.id === storyId).voteUpUsers.length;
  }

  voteDown(storyId: string, userId: number): boolean {
    const votedStory = this.stories.find(story => story.id === storyId);
    if (votedStory) {
      if (votedStory.voteDownUsers.indexOf(userId) !== -1) {
        return false;
      } else {
        // console.log(votedStory.voteDownUsers);
        votedStory.voteDownUsers.push(userId);
        votedStory.scoring--;
        return true;
      }
    }
  }

  getVoteDowns(storyId: string) {
    //this.itemsObservable.
    return this.stories.find(story => story.id === storyId).voteDownUsers.length;
  }
}
