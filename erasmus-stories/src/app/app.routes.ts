import {Routes} from "@angular/router";
import {StoryListComponent} from "./components/story-list/story-list.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {NameGameComponent} from "./components/name-game/name-game.component";

export const APP_ROUTES : Routes = [
  {path:'', component:StoryListComponent},
  {path:'login', component:LogInComponent},
  {path:'game', component:NameGameComponent}
];
