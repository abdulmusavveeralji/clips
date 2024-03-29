import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import IUser from "../models/user.models";
import {delay, filter, map, Observable, of, switchMap} from "rxjs";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection: AngularFirestoreCollection;
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;
  private redirect = false;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usersCollection = db.collection<IUser>('users')
    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    )
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(2000)
    )

    // this.route.data.subscribe(console.log)
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.route.firstChild),
      switchMap(route => route?.data ?? of({authOnly: false}))
    ).subscribe((data) => {
      this.redirect = data.authOnly ?? false;
    });
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


  public async logOut(ev: Event) {
    if(ev)
      ev.preventDefault();
    await this.auth.signOut();

    if (this.redirect)
      await this.router.navigateByUrl('/')
  }
}
