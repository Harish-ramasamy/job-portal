import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  bckclr: any = false;
  loginForm: any;
  constructor() {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      passWord: new FormControl('')
    },
    // {
    //   validators: this.commenVal
    // }
  )
  }
  commenVal(form:FormGroup){

  }

  onSubmit(){
    console.log(this.loginForm.value)
  }
  onchange(event: any){
    if(this.loginForm.get('userName').value.length > 1){
      this.bckclr = true
    }
  }
}
