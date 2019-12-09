import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tiles: Tile[] = [
    {text: '', cols: 1, rows: 3, color: 'white'},
    {text: 'Hola ', cols: 2, rows: 3, color: 'white'},
  ];

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  public userDisplayName;

  ngOnInit() {
    this.afAuth.authState.subscribe(state => {
      state != null ? this.userDisplayName = state.displayName : this.userDisplayName = '';
    });
  }

}
