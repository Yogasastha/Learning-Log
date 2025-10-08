import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { App } from '../../app';

@Component({
  selector: 'app-style-component',
  standalone: false,
  template: `<p class="inline">Inline CSS styling using Component Template</p>`,
  templateUrl: './style-component.html',
  styleUrls: ['./style-component.css', '../../app.css'],
  styles: [
    `
      .inline {
        font-weight: bold;
        color: blue;  
      }`
   ],
  
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Emulated // default
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class StylingComponent {

}
