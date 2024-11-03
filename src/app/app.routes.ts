import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage/homepage.component';
import { LoginComponent } from './homepage/login/login.component';
import { SignupComponent } from './homepage/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];
