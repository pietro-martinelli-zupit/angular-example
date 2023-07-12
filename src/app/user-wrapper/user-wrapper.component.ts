import {Component, Input} from '@angular/core';
import {User} from "../people.service";

@Component({
  selector: 'app-user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.css']
})
export class UserWrapperComponent {
  @Input()
  user: User | null = null
}
