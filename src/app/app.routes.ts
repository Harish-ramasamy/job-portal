import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from '../loginpage/forgot-password/forgot-password.component';
import { LoginComponent } from '../loginpage/login/login.component';
import { HomePageComponent } from '../homepage/home-page/home-page.component';
import { ProductsComponent } from '../products/products/products.component';

export const routes: Routes = [
    // {
    //     path:'',
    //     component: HomePageComponent
    // },
    {
        path:'login',
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
    },
    {
        path:'products',
        component: ProductsComponent
    }
];
