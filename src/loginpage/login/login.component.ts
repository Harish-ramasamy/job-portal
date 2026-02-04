import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  overAllUser = [
    {
      name: 'Hina',
      passWord: '1234'
    },
    {
      name: 'harish',
      passWord: '1234'
    }
  ];
  showData: boolean = false;
  invalide: boolean = false;
  showPass: boolean = false;
  constructor(private route: Router) {
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
    if (this.loginForm.get('userName').value) {
      let userData: any = [];
      this.overAllUser.forEach((res: any, ind ) => {
        if (this.loginForm.get('userName').value == res.name && this.loginForm.get('passWord').value === res.passWord) {
          userData.push(res)
          // this.showData = true;
          this.route.navigate(['/home-page'])

        } else {
          this.invalide = true
        }
      })
    } else {
      this.invalide = true;
    }
    console.log(this.loginForm.value)
  }


  onchange(event: any){
    if(this.loginForm.get('userName').value.length > 1){
      this.bckclr = true
    }
  }

  showPassfn(val: any){
    this.showPass = val === 'show' ? true : false;
  }
  routeFn(){
    this.route.navigate(['/forget-password'])
  }
}
