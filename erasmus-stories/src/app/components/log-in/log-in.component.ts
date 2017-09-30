import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  provider = new firebase.auth.FacebookAuthProvider();
  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }
  login() {
    this.afAuth.auth.signInWithRedirect(this.provider);
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
