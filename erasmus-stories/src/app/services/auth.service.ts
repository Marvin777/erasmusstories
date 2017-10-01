import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {User} from "../entities/User";
import {UserService} from "./user.service";

@Injectable()
export class AuthService {
  private provider = new firebase.auth.FacebookAuthProvider();

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
    console.log(curUser);

  }
  logout() {
    console.log(this.afAuth.auth);
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
    this.userService.logout();
  }
  isAuthenticated(): Observable< boolean > {
    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
        let token = result.credential.accessToken;
      }
      let user = result.user;
    }).catch(function (error) {
    });
    const state = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        // User is signed in.
        state.next(true);
      }else {
        state.next(false);
      }
    });
    return state.asObservable();
  }
}
