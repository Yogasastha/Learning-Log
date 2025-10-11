import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { Form } from './form/form';
import { Display } from './display/display';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BrowserModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('userformapp');
}
