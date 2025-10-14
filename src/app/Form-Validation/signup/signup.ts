import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../signup/Person.Interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {
  signUpForm: FormGroup | any;
  show: boolean = false;
  limit: boolean = false;
  successMessage = '';

  constructor(private fBuilder: FormBuilder, private route: Router) {}

  submitted: boolean = false;

  login() {
    this.route.navigate(['login']);
  }
  display() {
    const data: Person = this.signUpForm.value;
    return data;
  }
  signUp() {
    if (this.signUpForm.invalid) {
      return;
    }
    this.submitted = true;

    this.successMessage = 'Form submitted successfully!';
    console.log(this.display());
  }

  isInvalidAndTouched(controlName: string): boolean {
    const control = this.signUpForm.get(controlName);
    return control && control.invalid && control.touched;
  }

  getError(controlName: string, errorCode: string): any {
    
    return this.signUpForm.controls[controlName]?.errors?.[errorCode];
  }
  
  rfc() {
    return this.signUpForm.valid;
  }
  

  formatPhoneNumber(event: any) {
    const e = event.target as HTMLInputElement;
    let value = e.value ?? '';
    value = value.replace(/\D/g, '');

    if (value.length > 3 && value.length <= 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else if (value.length > 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }

    this.setValue('phoneNumber').setValue(value);
  }

  setValue(controlName: string) {
    return this.signUpForm.controls[controlName];
  }

  handleName(event: KeyboardEvent): boolean {
    const charCode = event.key;
    if (/[a-zA-Z ]/.test(charCode)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  handleValue(event: KeyboardEvent): boolean {
    const charCode = event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  ngOnInit(): void {
    this.signUpForm = this.fBuilder.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Za-z]+(?: [A-Za-z]+)*$'),
        ],
      ],
      gender: ['male', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      specialization: ['', Validators.required],
      experience: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(50),
        ],
      ],
      bio: ['', [Validators.maxLength(200)]],
    });
  }
}
