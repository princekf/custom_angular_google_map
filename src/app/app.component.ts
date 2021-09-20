import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first AGM project';

  lat = 23.0285312;
  lng = 72.5262336;
  
  start_end_mark:Array<[number, number, string, string]> = [];

  latlng:Array<[number, number, string, string]> = [
    [
      7.651350, 72.004590,
      'Green',
      '14/08/2021'
    ],
    [
      7.652365, 71.996506,
      'Red',
      '15/08/2021'
    ],
    [
      7.652591, 71.993309,
      'Blue',
      '16/08/2021'
    ]
  ];

  constructor() {
    // this i write because to display a marks on first place and last place
    this.start_end_mark.push(this.latlng[0]);
    this.start_end_mark.push(this.latlng[this.latlng.length - 1]);
   }

}
