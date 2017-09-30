import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {HeaderComponent} from "./components/header/header.component";
import {StoryListComponent} from "./components/story-list/story-list.component";
import {NameGameComponent} from "./components/name-game/name-game.component";
import {FlipCardComponent} from "./components/flip-card/flip-card.component";
import {ChatComponent} from "./components/chat/chat.component";
import {StoryComponent} from "./components/story/story.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";

import {GameCardComponent} from "./components/name-game/game-card/game-card.component";
import {StoryService} from "./services/story.service";
import {UserService} from "./services/user.service";
import {GameService} from "./services/game.service";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatTooltipModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthService} from "app/services/auth.service";
import {UserGuard} from "./components/user-guard.service";
import { WelcomeComponent } from './components/welcome/welcome.component';
import {DataService} from "./services/dataService";


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeaderComponent,
    StoryListComponent,
    NameGameComponent,
    FlipCardComponent,
    ChatComponent,
    StoryComponent,
    SignUpComponent,
    GameCardComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,

    routing
  ],
  providers: [GameService, UserService, StoryService, AuthService, UserGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
