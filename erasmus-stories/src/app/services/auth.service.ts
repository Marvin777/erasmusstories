import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {User} from "../entities/User";
import {UserService} from "./user.service";
@Injectable()
export class AuthService {
provider= new firebase.auth.FacebookAuthProvider();

  constructor(private router: Router, public afAuth: AngularFireAuth, private userService: UserService) {
  }
  signup() {
  }
  login() {
    this.afAuth.auth.signInWithRedirect(this.provider).catch(function(error){
      console.log(error);
    });
    const curUser = this.afAuth.auth.currentUser;
    let user = new User(
      this.userService.getHighestID()+1,
      curUser.displayName,
      curUser.email,
      'n',
      '-',
      '-',
      curUser.photoURL,
      '-',
      0,0,[],[],[]
      );
    this.userService.signIn(user);

  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['signin']);
  }
  isAuthenticated(): Observable< boolean > {
    const state = new Subject<boolean>();
    this.afAuth.auth.onAuthStateChanged( function(user) {
      if (user) {
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let uid = user.uid;
        let phoneNumber = user.phoneNumber;
        let providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
          document.getElementById('sign-in-status').textContent = 'Signed in';
          document.getElementById('sign-in').textContent = 'Sign out';
          document.getElementById('account-details').textContent = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }, null, '  ');
        });
        state.next(true);
      }else {
        state.next(false);
      }
    });
    return state.asObservable();
  }
}
