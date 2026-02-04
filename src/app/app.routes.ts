import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from '../loginpage/forgot-password/forgot-password.component';
import { LoginComponent } from '../loginpage/login/login.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path: 'forget-password',
        component: ForgotPasswordComponent,
        title: 'Forget Password'
    }
];
