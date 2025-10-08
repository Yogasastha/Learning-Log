import { Component, signal } from '@angular/core';
import { DataBinding } from './Components/data-binding/data-binding';
import { EventHandling } from './Components/event-handling/event-handling';
import {CustomPipe} from './Components/custom-pipe/custom-pipe';
import {RepeatPipe} from './Components/Pipe-Validation/StringRepeat/repeat-pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {   
  // title = 'angular-project';
}
