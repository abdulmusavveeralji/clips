import { Component } from '@angular/core';
import firebase from "firebase/compat/app";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  showAlert = false;
  alertMsg = 'Please wait! we are logging u in';
  alertColor = 'blue';
  inSubmission = false;
  constructor(private auth: AngularFireAuth) {
  }

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! we are logging u in';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
    } catch (e) {
      this.alertMsg = 'An unexpected error occurred. Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;
      console.log(e);
      return
    }
    this.alertMsg = 'Success! You are now logged in';
    this.alertColor = 'green';
  }

  protected readonly alert = alert;
}
