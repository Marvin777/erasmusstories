import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { StoryListComponent } from './story-list/story-list.component';
import { NameGameComponent } from './name-game/name-game.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { ChatComponent } from './chat/chat.component';
import { StoryComponent } from './story/story.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
