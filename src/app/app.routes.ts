import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from '../loginpage/forgot-password/forgot-password.component';
import { LoginComponent } from '../loginpage/login/login.component';
import { HomePageComponent } from '../homepage/home-page/home-page.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path: 'forget-password',
        component: ForgotPasswordComponent,
        title: 'Forget Password'
    },
    {
        path: 'home-page',
        component: HomePageComponent
    }
];
