import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private jwtHelper: JwtHelperService) {}

  getUserRole(): string {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found in localStorage');
      return '';
    }

    const decodedToken = this.jwtHelper.decodeToken(token);

    return decodedToken.role || '';
  }
}
