import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat',
  standalone: true
})
export class RepeatPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
   transform(value: string, count: number): string {
    return value.repeat(count);
  }

}
