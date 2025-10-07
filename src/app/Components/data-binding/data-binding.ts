import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  
  // Learning For one way data Binding
  title = 'Learn about Data Binding';

  // Learning For two way data Binding
  projectName = () =>  'Angular Project';

}
