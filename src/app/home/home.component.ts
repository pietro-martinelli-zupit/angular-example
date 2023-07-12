import {Component, OnInit} from '@angular/core';
import {PeopleService, User} from "../people.service";
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {State} from "../users/users.reducer";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peopleService: PeopleService, private store: Store<{ users: State }>) {
    this.otherSelectedUser$ = store.select("users")
  }
  ngOnInit(): void {
    this.peopleService.getUsers()
      .subscribe(data => this.usersData = data)
  }

  selectUser(user: User) {
    this.selectedUser = user
  }

  usersData: User[] = [];

  selectedUser: User | null = null

  // otherSelectedUser: User | null = null

  otherSelectedUser$: Observable<State>
}
