import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage/homepage.component';
import { LoginComponent } from './homepage/login/login.component';
import { SignupComponent } from './homepage/signup/signup.component';
import { BooksComponent } from './main-tamplate/books/books.component';
import { ShoppingCardComponent } from './main-tamplate/shopping-card/shopping-card.component';
import { OrdersComponent } from './main-tamplate/orders/orders.component';
import { authGuard } from './auth.guard';
import { authAdminGuard } from './main-tamplate/admin-features/auth-admin.guard';
import { UpdateBookComponent } from './main-tamplate/admin-features/update-book/update-book.component';
import { AddBookComponent } from './main-tamplate/admin-features/add-book/add-book.component';
import { AllUsersComponent } from './main-tamplate/admin-features/all-users/all-users.component';
import { ManageProfileComponent } from './main-tamplate/manage-profile/manage-profile.component';

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
  {
    path: 'add-book',
    component: AddBookComponent,
    canActivate: [authGuard, authAdminGuard],
  },
  {
    path: 'update-book/:id',
    component: UpdateBookComponent,
    canActivate: [authGuard, authAdminGuard],
  },
  {
    path: 'all-users',
    component: AllUsersComponent,
    canActivate: [authGuard, authAdminGuard],
  },
  {
    path: 'manage-profile',
    component: ManageProfileComponent,
    canActivate: [authGuard],
  },
];
