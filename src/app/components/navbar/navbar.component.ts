import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  public isSignedIn: boolean;
  public userPhoto: string;

  ngOnInit() {
    this.afAuth.authState.subscribe(state => {
      this.isSignedIn = !!state;
      state !== null ? this.userPhoto = state.photoURL : this.userPhoto = '';
    });
  }

  public login() {
    this.router.navigate(['/login']);
  }

  public goHome() {
    this.isSignedIn ? this.router.navigate(['/main']) : this.router.navigate(['/']);
  }

  public logout() {
    this.router.navigate(['/']);
    return this.afAuth.auth.signOut();
  }

}
