import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../people.service";
import { select } from "./users.actions"
import { Store } from '@ngrx/store';
import {State} from "./users.reducer";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private store: Store<{ users: State }>) {
  }
  @Input() users: User[] = [];

  @Output() onSelect: EventEmitter<User> = new EventEmitter<User>()

  onClick(user: User) {
    this.onSelect.emit(user)
    this.store.dispatch(select({ user }))
  }
}
