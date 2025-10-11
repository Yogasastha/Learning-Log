import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../form/person.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.html',
  styleUrl: './form.css',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
})
export class Form {
  
  userForm: FormGroup;
  submittedPerson: Person | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z ]*$')]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      specialization: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(1), Validators.max(50), Validators.pattern('^[0-9]*$')]],
      bio: ['', [Validators.maxLength(200)]],
    });
  }

  
  ft(fullName: string): boolean {
    return this.userForm.controls['fullName'].touched;
  }
  
  f(fullName: string): boolean {
    return this.userForm.controls['fullName'].invalid;
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submittedPerson = this.userForm.value;
      this.router.navigate(['/display'], { state: { person: this.submittedPerson } });
    }
  }
}
