import {EventEmitter, Injectable, Output} from "@angular/core";
import * as _ from "lodash";
import loremIpsum from "lorem-ipsum";
import {Http} from "@angular/http";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import {Story} from "../entities/Story";
import {Observable} from "rxjs/Observable";

const MOCK_STORIES: Story[] = [{
  id: _.uniqueId('story_'),
  authorUserId: 2,
  text: "Does somebody wants to join me for a hiking tour in the Mountains nearby?",
  date: new Date("September 30, 2017 10:13:00"),
  scoring: 2,
  voteUpUsers: [],
  voteDownUsers: [],
  comments: []
}, {
  id: _.uniqueId('story_'),
  authorUserId: 4,
  text: "Does somebody know a free apartement in wonderful and beautiful",
  date: new Date("September 29, 2016 11:13:00"),
  scoring: 9,
  voteUpUsers: [],
  voteDownUsers: [],
  comments: []
},
  {
    id: _.uniqueId('story_'),
    authorUserId: 6,
    text: "Yesterday I met this funny guy in Figge, how showed some magic tricks. The last one went wrong and he burned my shirt. Never trust a magician",
    date: new Date("September 30, 2016 15:13:00"),
    scoring: 2,
    voteUpUsers: [],
    voteDownUsers: [],
    comments: []
  },
  {
    id: _.uniqueId('story_'),
    authorUserId: 7,
    text: 'What is the name of this tall ESN guy with the beard?!',
    date: new Date("September 30, 2016 17:13:00"),
    scoring: 2,
    voteUpUsers: [],
    voteDownUsers: [],
    comments: []
  },
  {
    id: _.uniqueId('story_'),
    authorUserId: 8,
    text: "Next Trip: Barcelona or Madrid?",
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
  @Output() initialized = new EventEmitter();


  private databaseUrl: string = "https://erasmusstories-f269c.firebaseio.com/stories.json";

  constructor(private http: Http, private database: AngularFireDatabase) {
    this.fetchData().subscribe(
      (stories: Story[]) => {
        if (stories != null) {
          this.stories = stories;
          console.log("[StoryService] retrieved " + this.stories.length + " stories");
          this.getData();
        }
      });

    this.getData();
  }

  fetchData() {
    return this.http.get(this.databaseUrl).map(response => response.json());
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
    console.log("[StoryService] start fetching for Data");
    let itemsObservable = this.database.list('stories');
    itemsObservable.subscribe(storyItems => {
      storyItems.forEach(storyItem => {
        if (!this.stories.includes(storyItem)) {
          this.stories.push(storyItem);
        }
      });
      this.initialized.emit();
    });
  }

  getStories(): Story[] {
    return this.stories;
  }

  voteUp(story: Story, userId: number) {
    if (!story.voteUpUsers.includes(userId)) {
      story.voteUpUsers.push(userId);
      if (story.voteDownUsers.includes(userId)) {
        story.voteDownUsers.pop()
      }
    } else {
      story.voteUpUsers.pop()
      }
    }

  voteDown(story: Story, userId: number) {
    if (!story.voteDownUsers.includes(userId)) {
      story.voteDownUsers.push(userId);
      if (story.voteUpUsers.includes(userId)) {
        story.voteUpUsers.pop()
      }
    } else {
      story.voteDownUsers.pop()
    }
  }


}
