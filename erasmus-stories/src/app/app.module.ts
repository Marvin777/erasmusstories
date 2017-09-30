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
import {MatToolbarModule, MatCardModule, MatIconModule, MatSidenavModule} from '@angular/material';

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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    routing, MatToolbarModule, MatCardModule, MatIconModule, MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
