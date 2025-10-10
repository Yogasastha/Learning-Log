import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './Components/Routing/home/home';
import {About} from './Components/Routing/about/about';
import { Contact } from './Components/Routing/contact/contact';
import { DataBinding } from './Components/data-binding/data-binding';
import { EventHandling } from './Components/event-handling/event-handling';
import { StylingComponent } from './Components/style-component/style-component';
import { Pipes } from './Components/pipes/pipes';
import { CustomPipe } from './Components/custom-pipe/custom-pipe';
import {Product} from './Components/Routing/product/product';
import {NgDirectives} from './Components/ng-directives/ng-directives'

const routes: Routes = [
  // {
  //   path: "", component: App
  // },
  { 
    path:"home", component: Home
  },
  {
    path:"about", component: About
  },
  {
    path: "contact", component: Contact
  }, 
  {
    path: "product/:pid", component: Product
  },
  {
    path: "product/:pid/:pname", component: Product
  },
  {
    path: "product", component: Product,
    children: [
      
      {
        path: "search", component: Contact
      }
    ]
  },
  {
    path: "binding", component: DataBinding
  },
  {
    component: EventHandling, path: "event"
  },
  {
    component: StylingComponent, path: "style"
  },
  {
    component: Pipes, path: "pipes"
  },
  {
    component: CustomPipe, path: "custompipe"
  },
  {
    path: "ng-directives", component: NgDirectives
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { 
  
}
