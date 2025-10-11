import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form } from './form/form';
import { Display } from './display/display';

export const routes: Routes = [
  { path: '', component: Form },
  { path: 'display', component: Display }  
];
// 
