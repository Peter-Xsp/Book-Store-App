import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const role = authService.getUserRole();

  if (role === 'admin') {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
