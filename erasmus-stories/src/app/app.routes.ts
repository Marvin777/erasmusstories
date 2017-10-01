import {RouterModule, Routes} from "@angular/router";
import {StoryListComponent} from "./components/story-list/story-list.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {NameGameComponent} from "./components/name-game/name-game.component";
import {ProfileComponent} from "./components/profile/profile.component";

import {WelcomeComponent} from "./components/welcome/welcome.component";

const APP_ROUTES: Routes = [
  {path:'', component: WelcomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'story', component: StoryListComponent}, //canActivate: [UserGuard]},
  {path: 'game', component: NameGameComponent}, //canActivate: [UserGuard]},
  {path: 'profile', component: ProfileComponent} //canActivate: [UserGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
