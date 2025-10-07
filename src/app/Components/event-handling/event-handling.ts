import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  standalone: false,
  templateUrl: './event-handling.html',
  styleUrl: './event-handling.css'
})
export class EventHandling {

  count = 0;
  increment() {
    this.count++; 
  }
}
