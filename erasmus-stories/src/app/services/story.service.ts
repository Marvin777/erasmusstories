import {Injectable} from "@angular/core";
import * as _ from "lodash";
import loremIpsum from 'lorem-ipsum';
import {Http} from "@angular/http";
import {AngularFireDatabase} from "angularfire2/database";
import {Story} from "../entities/Story";

const MOCK_STORIES: Story[] = [{
  id: _.uniqueId('story_'),
  authorUserId: _.uniqueId('user_'),
  text: loremIpsum(500),
  date: new Date("September 30, 2017 10:13:00"),
  scoring: 2,
  voteUpUsers: [],
  voteDownUsers: [],
  comments: []
}, {
  id: _.uniqueId('story_'),
  authorUserId: _.uniqueId('user_'),
  text: loremIpsum(500),
  date: new Date("September 29, 2016 11:13:00"),
  scoring: 9,
  voteUpUsers: [],
  voteDownUsers: [],
  comments: []
},
  {
    id: _.uniqueId('story_'),
    authorUserId: _.uniqueId('user_'),
    text: loremIpsum(500),
    date: new Date("September 30, 2016 15:13:00"),
    scoring: 2,
    voteUpUsers: [],
    voteDownUsers: [],
    comments: []
  },
  {
    id: _.uniqueId('story_'),
    authorUserId: _.uniqueId('user_'),
    text: loremIpsum(500),
    date: new Date("September 30, 2016 17:13:00"),
    scoring: 2,
    voteUpUsers: [],
    voteDownUsers: [],
    comments: []
  },
  {
    id: _.uniqueId('story_'),
    authorUserId: _.uniqueId('user_'),
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
  stories: Story[];


  constructor(private http: Http, private database: AngularFireDatabase) {
    this.stories = MOCK_STORIES;
  }

  /*
        this.fetchData().subscribe((data) =>
          this.onSuccess(data));
      }
      onSuccess(exchangeStudent: any[]) {

      } */

  //@todo Server Connection
  getStories() : Story[] {
    return this.stories;
  }

  voteUp(storyId: string, userId: number):boolean {
    let votedStory :Story;
    votedStory= this.stories.find(story => story.id === storyId);
    if (votedStory) {
      if(votedStory.voteUpUsers.indexOf(userId)!== -1){
        return false;
      }else{
        votedStory.voteUpUsers.push(userId);
        //console.log(votedStory.voteUpUsers);
        votedStory.scoring++;
        return true;
      }
    }
  }
  getVoteUps(storyId: string){
    return this.stories.find(story => story.id === storyId).voteUpUsers.length;
  }

  voteDown(storyId: string, userId: number):boolean {
    const votedStory = this.stories.find(story => story.id === storyId);
    if (votedStory) {
      if(votedStory.voteDownUsers.indexOf(userId)!== -1){
        return false;
      }else{
       // console.log(votedStory.voteDownUsers);
        votedStory.voteDownUsers.push(userId);
        votedStory.scoring--;
        return true;
      }
    }
  }
  getVoteDowns(storyId: string){
    return this.stories.find(story => story.id === storyId).voteDownUsers.length;
  }

  fetchData() {
    // return this.http.get('https://projektarbeit-fb86a.firebaseio.com/stories.json').map(response => response.json());
  }

  /*  storeData() {
      this.fetchData().subscribe((data) =>
        this.onSuccess(data));
      this.database.object('/localstudents').remove();
      const body = JSON.stringify(this.localStudents);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post('https://projektarbeit-fb86a.firebaseio.com/stories.json', body, {
        headers: headers
      });
    }*/
}
