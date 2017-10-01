import {RouterModule, Routes} from "@angular/router";
import {StoryListComponent} from "./components/story-list/story-list.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {NameGameComponent} from "./components/name-game/name-game.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {StoryDetailComponent} from "./components/story-detail/story-detail.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {UserGuard} from "app/components/user-guard.service";

const APP_ROUTES: Routes = [
  {path:'', component: WelcomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'story', component: StoryListComponent},
  {path: 'storyDetail', component: StoryDetailComponent},
  {path: 'game', component: NameGameComponent},
  {path: 'profile', component: ProfileComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
