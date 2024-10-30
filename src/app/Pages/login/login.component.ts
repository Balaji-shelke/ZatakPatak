import { core } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  LoginForm!: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {
  }
  ngOnInit() {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.startCountdown();

  }
  onSubmit() {
    console.log(this.LoginForm.value)
  }
  expireInMin: number = 1; // the countdown time in minutes
  timeLeft: number = this.expireInMin * 60; // converting minutes to seconds
  minutes!: number;
  seconds!: number;
  private subscription!: Subscription;



  startCountdown() {
    this.subscription = interval(1000).pipe(
      takeWhile(() => this.timeLeft > 0)
    ).subscribe(() => {
      this.timeLeft--;
      this.minutes = Math.floor(this.timeLeft / 60);
      this.seconds = this.timeLeft % 60;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}



