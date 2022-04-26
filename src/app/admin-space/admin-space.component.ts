import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.scss'],
})
export class AdminSpaceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  myDate: Date = new Date();

  meetSupport(){
    location.href = "https://accounts.google.com/AccountChooser/signinchooser?continue=https://g.co/meet/Administration";
 }
}
