import {Component, OnDestroy, OnInit} from "@angular/core";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, OnDestroy {

    uiConfig = {
      signInSuccessUrl: '/',
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


  private ui;
  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
  }


  ngOnDestroy(): void {

    this.ui.delete();

  }
  ngOnInit() {
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    console.log("3");
    this.ui.start('#firebaseui-auth-container', this.uiConfig);
    console.log("afterinit");
  }


  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    this.ui.delete();
  }
}
