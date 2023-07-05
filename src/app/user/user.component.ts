import {Component, Input} from '@angular/core';
import {User} from "../people.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: User | null = null;

  getInitial() {
    return this.user?.name?.substring(0, 1) || "-"
  }
}
