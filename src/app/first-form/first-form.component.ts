import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent {
  firstName = new FormControl('');

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    this.invalidUsernameValidator
  ]);

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

  invalidUsernameValidator(ctrl : AbstractControl) : ValidationErrors | null {
    if(ctrl.value == 'invalid') return { invalidUsername: { value: ctrl.value }}
    return null
  }
}
