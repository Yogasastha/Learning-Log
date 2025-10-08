import { Component } from '@angular/core';
import {RepeatPipe } from '../Pipe-Validation/StringRepeat/repeat-pipe';
import {CurrentAgePipe} from '../Pipe-Validation/age/current-age-pipe'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.css',
  imports: [RepeatPipe, CurrentAgePipe, FormsModule]
})
export class CustomPipe {

  course: object[] = [ 
    {name: 'Angular', duration: '5 days'},
    {name: 'React', duration: '3 days'},
    {name: 'Vue', duration: '4 days'},
    {name: 'Node', duration: '6 days'}
  ]

  msg: string = "Welcome to Custom Pipe!! ------ ";
  
stringJson: string = '';
stringObject: string = '';

date: string = '';
ngOnInit() {
    this.stringJson = JSON.stringify(this.course);
    // console.log(this.stringJson);
    // console.log(typeof(this.stringJson));
    this.stringObject = JSON.parse(this.stringJson);
  }
}
