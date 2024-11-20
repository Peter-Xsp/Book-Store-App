import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (typeof window === 'undefined' || !localStorage) {
    router.navigate(['']);
    return false;
  }

  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['']);
    return false;
  }

  return true;
};
