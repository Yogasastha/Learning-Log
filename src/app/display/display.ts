import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-display',
  imports: [CommonModule],
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display  implements OnInit {
  person: any;

  constructor(private location: Location) { }

  ngOnInit() {
    const navigation = window.history.state;
    if (navigation && navigation.person) {
      this.person = navigation.person;
    }
  }

  goBack() {
    this.location.back();
  }
}
