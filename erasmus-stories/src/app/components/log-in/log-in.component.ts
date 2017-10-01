import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

    uiConfig = {
    signInSuccessUrl: 'story',
      callbacks: {
        'signInSuccess': function(user, credential, redirectUrl) {
          if (window.opener) {
            // The widget has been opened in a popup, so close the window
            // and return false to not redirect the opener.
            window.close();
            return false;
          } else {
            // The widget has been used in redirect mode, so we redirect to the signInSuccessUrl.
            return true;
          }}},
    signInOptions: { provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes : [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
        ]}
  };
  // Initialize the FirebaseUI Widget using Firebase.
  ui = new firebaseui.auth.AuthUI(firebase.auth());

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    // The start method will wait until the DOM is loaded.
    this.ui.start('#firebaseui-auth-container', this.uiConfig);
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout()
  }
  ngOnDestroy() {
    this.ui.reset();

  }

}
