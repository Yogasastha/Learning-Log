import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DataBinding } from './Components/data-binding/data-binding';
import { EventHandling } from './Components/event-handling/event-handling';
import { StylingComponent } from './Components/style-component/style-component';
import { Pipes } from './Components/pipes/pipes';
import { CustomPipe } from './Components/custom-pipe/custom-pipe';
import {RepeatPipe} from './Components/Pipe-Validation/StringRepeat/repeat-pipe';
import { CurrentAgePipe } from './Components/Pipe-Validation/age/current-age-pipe';
import { Home } from './Components/Routing/home/home';
import { About } from './Components/Routing/about/about';
import { Contact } from './Components/Routing/contact/contact';
import { Product } from './Components/Routing/product/product';
import { NgDirectives } from './Components/ng-directives/ng-directives';
import {CommonModule} from '@angular/common';
import {NgIfCondtion} from './Components/ng-directives/ng-if-condtion/ng-if-condtion';
import {NgForCondition} from './Components/ng-directives/ng-for-condition/ng-for-condition'



@NgModule({
  declarations: [
    App,
    DataBinding,
    EventHandling,
    StylingComponent,
    Pipes,
    Home,
    About,
    Contact,
    Product,
    NgDirectives,
    NgForCondition,
    NgIfCondtion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomPipe,
    RepeatPipe,
    CurrentAgePipe,
    CommonModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
