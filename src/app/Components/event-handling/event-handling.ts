import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  standalone: false,
  templateUrl: './event-handling.html',
  styleUrl: './event-handling.css',
})
export class EventHandling {
  count = 0;
  increment() {
    this.count++;
  }
  stateValue: boolean = false;
  msg: string = 'Hi Everyone';
  display() {
    this.stateValue = !this.stateValue;
  }
  hoverMsg: string = 'Start Hovering';
  onHoverEvent() {
    this.hoverMsg = 'Welcome to Angular';
  }

  name: string = "Sastha";
  another: string = "";
  change: boolean = false;
  onInputEvent(event: Event) {
      this.another = (event.target as HTMLInputElement).value;
  }
  onChange() {
    this.name = this.another;
  }
}
