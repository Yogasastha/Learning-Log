import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person, Users } from '../signup/Person.Interface';
@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {
  signUpForm: FormGroup | any;
  // userData: any;
  limit: boolean = false;
  successMessage = '';
  // maskUp = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private fBuilder: FormBuilder) {}

  submitted: boolean = false;
  userData() {
    const data: Person = this.signUpForm.value;
    const user: Users = { person: [data] };
    return this.submitted ? user.person : '';
  }
  signUp() {
    this.submitted = true;

    if (this.signUpForm.valid) {
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
    console.log(this.signUpForm.controls.fullName.valid);
    return this.signUpForm.controls[controlName]?.errors?.[errorCode];
  }

  rfc() {
    return this.signUpForm.invalid;
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

    this.rfcValue('phoneNumber').setValue(value);
  }

  rfcValue(controlName: string) {
    return this.signUpForm.controls[controlName];
  }
  handleLength(event: KeyboardEvent, value: number) {
    const e = (event.target as HTMLInputElement).value.length;
    if (e >= value) {
      this.limit = true;
      console.log(this.limit);
      console.log('Pressed');
      event.preventDefault();
    } else {
      this.limit = false;
    }
  }

  // handleValue(event: any, minValue: number) {
  //   const inputValue = event.target.value;
  //   if (parseInt(inputValue, 10) < minValue) {
  //     event.preventDefault(); // Prevent entering values below minValue
  //   }
  // }

   handleValue(event: any, minValue: number) {
    const inputValue = event.target.value;
    if (parseInt(inputValue, 10) < minValue) {
      event.preventDefault();
      this.signUpForm.controls['experience'].setValue(minValue);
    }
  }
  ngOnInit(): void {
    this.signUpForm = this.fBuilder.group({
      fullName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z ]*$')],
      ],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // (123) 232-3232
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      specialization: ['', Validators.required],
      experience: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(50),
          // Validators.pattern('^[0-9]*$'),
        ],
      ],
      bio: ['', [Validators.maxLength(200)]],
    });
  }
}

// patterns: any = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

// phonePattern: RegExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

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
