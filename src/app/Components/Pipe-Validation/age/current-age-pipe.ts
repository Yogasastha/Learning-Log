import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentAge',
  standalone: true
})
export class CurrentAgePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }



  transform(birthDay: Date | string) : number{
    
    const birth = new Date(birthDay);
    const current = new Date();
    return current.getFullYear() - birth.getFullYear();
  }

}
