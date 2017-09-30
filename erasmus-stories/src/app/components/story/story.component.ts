import {Component, Input, OnInit} from '@angular/core';
import {Story} from "../../entities/Story";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input()
  private story: Story;
  constructor() { }

  ngOnInit() {
  }

}
