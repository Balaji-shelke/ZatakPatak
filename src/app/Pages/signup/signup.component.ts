import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;
  loading = false;
  submitted = false;
  auth = inject(AuthService)
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    // Set loading to true to disable the button
    this.loading = true;

    // Simulating a form submission process
    // Here you can integrate with a service to process the form data
    setTimeout(async () => {
      try {
        const result = await this.auth.signup(this.signupForm.value);
        console.log('Signup successful', result);
        // Handle successful signup: Navigate to login or show success message
      } catch (error) {
        console.error('Signup error', error);
        //this.errorMessage = 'Signup failed. Please try again.'; 
      }
      // Simulate form processing
      console.log('Form Submitted', this.signupForm.value);

      // Reset loading upon completion
      this.loading = false;
    }, 2000);
  }
}
