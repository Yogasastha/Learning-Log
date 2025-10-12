import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Person, Users} from '../signup/Person.Interface' 

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {
  signUpForm: FormGroup | any;
  // userData: any;
  successMessage = '';
  
  constructor(private fBuilder: FormBuilder) {}
  
  submitted: boolean = false;
  userData() {
    const data: Person = this.signUpForm.value;
     const user: Users = { person: [data] }; 
     return (this.submitted) ? user: "";
  }
  signUp() {
    this.submitted = true;
    
    if (this.signUpForm.invalid) {
      return;
    }
    
    this.successMessage = 'Form submitted successfully!';
    console.log(this.userData());
  }
  

  isInvalidAndTouched(controlName: string): boolean {
    const control = this.signUpForm.get(controlName);
    return control && control.invalid && control.touched;
  }

  getError(controlName: string, errorCode: string): any {
    return this.signUpForm.controls[controlName]?.errors?.[errorCode];
  }

  rfc() {
      return this.signUpForm.invaild;
    }

  ngOnInit(): void {
    this.signUpForm = this.fBuilder.group({
      fullName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z ]*$')],
      ],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      specialization: ['', Validators.required],
      experience: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(50),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      bio: ['', [Validators.maxLength(200)]],
    });



  }
}





  // patterns: any = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  // phonePattern: RegExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

  // rfc(controlName: string): boolean {
  //   return this.signUpForm.controls[controlName].invalid;
  // }
  // rfsc(controlName: string, feature: string): boolean {
  //   return this.signUpForm.controls[controlName].[feature];
  // }


  
  // user: Users[] = [
  //   {
  //     person: [
  //       {
  //         fullName: '',
  //         gender: '',
  //         email: '',
  //         phNumber: null,
  //         specialization: '',
  //         experience: null,
  //         bio: '',
  //       },
  //     ],
  //   },
  // ];