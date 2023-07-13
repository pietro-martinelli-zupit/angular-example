import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent {
  firstName = new FormControl('');

  username = new FormControl('');

  reset() {
    this.firstName.reset()
    this.username.reset()
  }

  setPietro() {
    this.firstName.setValue('Pietro')
    this.username.setValue('pietrom')
  }

  showValues() {
    alert(`First name: ${this.firstName.value}. Username: ${this.username.value}`)
  }
}
