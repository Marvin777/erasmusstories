import {Component, OnInit} from "@angular/core";
import {StoryService} from "../../services/story.service";
import {Story} from "../../entities/Story";


@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css'],
  providers: [StoryService],
})
export class StoryListComponent implements OnInit {
  stories: Story[];

  constructor(storyService: StoryService) {
    storyService.initialized.subscribe(() => {
      this.stories = storyService.getStories();
    });
  }

  ngOnInit() {
  }
}

