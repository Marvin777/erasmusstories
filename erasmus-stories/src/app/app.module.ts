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

import {MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {GameCardComponent} from "./components/name-game/game-card/game-card.component";
import {StoryService} from "./services/story.service";
import {UserService} from "./services/user.service";
import {GameService} from "./services/game.service";
import {MatToolbarModule, MatCardModule, MatIconModule, MatSidenavModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


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
    GameCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    MatToolbarModule, MatCardModule, MatIconModule, MatSidenavModule, BrowserAnimationsModule, MatMenuModule,
    routing
  ],
  providers: [GameService, UserService, StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
