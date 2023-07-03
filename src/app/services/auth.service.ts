import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import IUser from "../models/user.models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection: AngularFirestoreCollection;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.usersCollection = db.collection<IUser>('users')
  }

  async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('Password is not provided!')
    }
    const userCred = await this.auth
      .createUserWithEmailAndPassword(userData.email as string, userData.password as string)
    console.log('userCred', userCred);

    if (!userCred.user) {
      throw new Error('User cant be found')
    }
    await this.usersCollection.doc(userCred.user.uid).set({
      name: userData.name,
      age: userData.age,
      email: userData.email,
      phoneNumber: userData.phoneNumber
    });

    await userCred.user.updateProfile({
      displayName: userData.name
  })
  }
}
