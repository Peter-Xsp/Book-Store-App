import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

import { HomeBackroundComponent } from '../home-backround.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeBackroundComponent, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private httpClient = inject(HttpClient);

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private apiUrl = 'http://localhost:3000/api/auth/login';

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password,
    };

    this.httpClient.post<{ token: string }>(this.apiUrl, userData).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        console.log('Login successful');
      },
      (error) => {
        this.errorMessage = 'Invalid email or password. Please try again.';
        console.error('Login failed:', error);
      }
    );
  }
}
