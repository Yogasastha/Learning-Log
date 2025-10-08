import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  // transform(value: string, prefix: string): boolean {
  //   return value.startsWith(prefix);
  // }
  data: string = 'hELlo pIPes ';
  date: Date = new Date();

  msg: string = 'This is Angular Pipes Example';
  num: number = 10000.56;
}
