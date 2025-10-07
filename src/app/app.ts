import { Component, signal } from '@angular/core';
import { DataBinding } from './Components/data-binding/data-binding';
import { EventHandling } from './Components/event-handling/event-handling';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {  
  constructor() {

  }

  // Step 1 of one way data binding
  db = new DataBinding();
  event= new EventHandling();
  count = this.event.count;
  increment = () => this.event.increment();
  // project = this.db.projectName();
  project = "Hi";
  title = this.db.title;
  
  // title = 'Angular Project';
}
