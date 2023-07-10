import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../people.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() users: User[] = [];

  @Output() onSelect: EventEmitter<User> = new EventEmitter<User>()

  onClick(user: User) {
    this.onSelect.emit(user)
  }
}
