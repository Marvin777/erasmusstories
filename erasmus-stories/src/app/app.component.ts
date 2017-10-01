import {Component} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase, http: Http) {
    let item = {Name: "felix", Surname: "War", SurSurname: "hier"};

    const body = JSON.stringify(item);
    http.post(environment.firebase.databaseURL + "/items.json", body, {});
  }


  title = 'app works!';
}
