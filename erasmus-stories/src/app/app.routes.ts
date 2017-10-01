import {RouterModule, Routes} from "@angular/router";
import {StoryListComponent} from "./components/story-list/story-list.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {NameGameComponent} from "./components/name-game/name-game.component";
import {UserGuard} from "./components/user-guard.service";

import {WelcomeComponent} from "./components/welcome/welcome.component";

const APP_ROUTES: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'story', component:StoryListComponent},
  {path:'game', component:NameGameComponent},
  {path:'login', component:LogInComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
