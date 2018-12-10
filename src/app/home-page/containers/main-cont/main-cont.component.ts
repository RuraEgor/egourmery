import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-cont',
  templateUrl: './main-cont.component.html',
  styleUrls: ['./main-cont.component.scss']
})
export class MainPageContComponent implements OnInit {
  
  people: any;
  selectedSimpleItem: string = 'Deine Strasse und Hausnummer';
  
  // items = [true, 'Two', 3];
  items: any;

  constructor() { }

  ngOnInit() {
    this.people = [
      {
        'value': '1',
        'label': 'Deine Strasse und Hausnummer'
      },
      {
        'value': '2',
        'label': 'Deine Strasse und Hausnummer'
      },
      {
        'value': '3',
        'label': 'Deine Strasse und Hausnummer'
      },
      {
        'value': '4',
        'label': 'Deine Strasse und Hausnummer'
      }
    ];
  }

}
