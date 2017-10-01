import {RouterModule, Routes} from "@angular/router";
import {StoryListComponent} from "./components/story-list/story-list.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {NameGameComponent} from "./components/name-game/name-game.component";
import {ProfileComponent} from "./components/profile/profile.component";

const APP_ROUTES: Routes = [
  {path:'', component:StoryListComponent},
  {path:'login', component:LogInComponent},
  {path:'game', component:NameGameComponent},
  {path: 'profile', component: ProfileComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
