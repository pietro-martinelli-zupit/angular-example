import {Component, Input} from '@angular/core';
import {User} from "../people.service";

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent {
  @Input()
  user: User | null = null
}
