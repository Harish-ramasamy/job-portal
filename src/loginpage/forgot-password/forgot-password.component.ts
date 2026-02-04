import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: any;
  forgetForm: any;
  otpSent: boolean = false;
  constructor(){
    this.forgetForm = new FormGroup({
      email: new FormControl('', Validators.email),
      otp: new FormControl('', Validators.required)
    })
  }

  sndOTP(){
    console.log(this.forgetForm.controls.email.invalide)
    if(this.forgetForm.controls.email.invalide){
      this.otpSent = false;
    } else {
      this.otpSent = true;
    }
  }

  varifyOtp(){
    this.otpSent = true
  }
}
