import { Component, OnInit } from '@angular/core';

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
    {text: '', cols: 1, rows: 3, color: 'white'},
    {text: 'Login section', cols: 2, rows: 3, color: 'white'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
