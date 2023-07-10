import {Component, OnInit} from '@angular/core';
import {PeopleService, User} from "../people.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peopleService: PeopleService) {
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
}
