import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{
  loginForm : FormGroup | any;
  constructor(private fBuilder: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.loginForm = this.fBuilder.group({
     email:  ['', [Validators.required, Validators.email]]
    });
  }
  rfc() {
    return this.loginForm.invalid;
  }

  login() {
      this.route.navigate(['sign']);
  }
  display() {
    this.route.navigate(['display']);
  }
}
