import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import IUser from "../../models/user.models";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  inSubmission = false;
  constructor(
    private auth: AuthService
  ) { }

  name = new FormControl('', [
    Validators.required,
  Validators.minLength(3)
  ])
  email = new FormControl('', [Validators.required, Validators.email])
  age = new FormControl<number | null>(null, [
    Validators.required, Validators.min(18), Validators.max(120)
  ])
  password = new FormControl('',[
    Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirmPassword = new FormControl('', [
    Validators.required
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.minLength(13)
  ])

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber
  });
  showAlert = false;
  alertMsg = '';
  alertColor = 'blue';

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait, Your account is being created!'
    this.alertColor = 'blue';
    this.inSubmission = true;

    const {email, password} = this.registerForm.value
    try {
      this.auth.createUser(this.registerForm.value as IUser);
    } catch(e) {
      console.error('e', e);

      this.alertMsg = 'An unexpected error occurred. Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;
      return
    }

    this.alertMsg = 'Success! Your account has been created.';
    this.alertColor = 'green'
  }
}
