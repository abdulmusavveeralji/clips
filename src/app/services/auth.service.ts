import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import IUser from "../models/user.models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  async createUser(userData: IUser) {
    const userCred = await this.auth
      .createUserWithEmailAndPassword(userData.email as string, userData.password as string)
    console.log('userCred', userCred);

    await this.db.collection('users').add({
      name: userData.name,
      age: userData.age,
      email: userData.email,
      phoneNumber: userData.phoneNumber
    });
  }
}
