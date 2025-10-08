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


@NgModule({
  declarations: [
    App,
    DataBinding,
    EventHandling,
    StylingComponent,
    Pipes,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomPipe,
    RepeatPipe,
    CurrentAgePipe,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
