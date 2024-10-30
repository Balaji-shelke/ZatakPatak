import { Routes } from '@angular/router';
import { SignupComponent } from './Pages/signup/signup.component';
import { LoginComponent } from './Pages/login/login.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "", pathMatch: 'prefix', component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: '**', component: PageNotFoundComponent }
];
