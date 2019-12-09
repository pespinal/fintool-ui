import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tiles: Tile[] = [
    { text: '', cols: 1, rows: 3, color: 'white' },
    { text: 'Login section', cols: 2, rows: 3, color: 'white' },
  ];

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private ngZone: NgZone
  ) { }

  public userDisplayName;
  public userPhoto;


  ngOnInit() {
  }

  public signInWithGoogle() {
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((user: any) => {
        this.userPhoto = user.user.photoURL;
        this.userDisplayName = user.user.displayName;
        this.ngZone.run(() => {
          this.router.navigate(['/main']);
        })
      })
      .catch(console.log)
  }
}
