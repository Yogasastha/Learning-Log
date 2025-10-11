import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Person {
  fullName: string;
  gender: string;
  email: string;
  phNumber: number | null;
  specialization: string;
  experience: number | null;
  bio: string;
}

interface Users {
  person: Person[];
}
@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {
  loginForm: FormGroup | any;
  patterns: any = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonePattern: RegExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

  user: Users[] = [
    {
      person: [
        {
          fullName: '',
          gender: '',
          email: '',
          phNumber: null,
          specialization: '',
          experience: null,
          bio: '',
        },
      ],
    },
  ];

  constructor(private fBuilder: FormBuilder) {}

  submitted: boolean = false;
  signUp() {
    this.submitted = true;
    console.log(this.loginForm.controls['email'].errors);
  }

  // rfc() {
  //     return this.loginForm.controls;
  //   }
  rfc(controlName: string): boolean {
    return this.loginForm.controls[controlName].invalid;
  }

  ngOnInit(): void {
    this.loginForm = this.fBuilder.group({
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      phNumber: ['', [Validators.required,Validators.pattern(this.phonePattern), Validators.maxLength(10)]],
      specialization: ['', Validators.required],
      experience: ['', Validators.required, Validators.min(1), Validators.max(50)],
      bio: ['', Validators.required],
    });
  }

  // const name: String= this.loginForm.controls.fullName.value;
  // console.log(name);
}
// per: Users[] = [
// person: [
//   {
//     fullName: '',
//     gender: false,
//     email: '',
//     phNumber: null,
//     specialization: '',
//     experience: null,
//     bio: '',
//   },
// ]
// ];
