import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage/homepage.component';
import { LoginComponent } from './homepage/login/login.component';
import { SignupComponent } from './homepage/signup/signup.component';
import { BooksComponent } from './main-tamplate/books/books.component';
import { ShoppingCardComponent } from './main-tamplate/shopping-card/shopping-card.component';
import { OrdersComponent } from './main-tamplate/orders/orders.component';
import { authGuard } from './auth.guard';

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
  {
    path: 'home',
    component: BooksComponent,
    canActivate: [authGuard],
  },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'my-orders',
    component: OrdersComponent,
    canActivate: [authGuard],
  },
];
