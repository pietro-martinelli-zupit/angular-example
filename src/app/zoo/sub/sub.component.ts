import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {State} from "../../users/users.reducer";
import {select} from "../../users/users.actions";

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {
  constructor(private store: Store<{ users: State }>) {
  }
  onClick() {
    this.store.dispatch(select({
      user: {
        id: 19,
        name: 'Pietro',
        username: 'pietrom',
        email: 'pietro@example.com',
        phone: '00391234567',
        website: 'askpietro.amicofragile.org',
        address: {
          street: 'via Pietro 19',
          city: 'Brescia',
          suite: 'A',
          zipcode: '12345',
          geo: {
            lat: 13.45,
            lng: 44.44
          }
        }
      }
    }))
  }
}
