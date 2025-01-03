import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';

import { HomeBackroundComponent } from '../home-backround.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeBackroundComponent, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private httpClient = inject(HttpClient);
  private router = inject(Router);

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private apiUrl = `${environment.apiUrl}/auth/login`;

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password,
    };

    this.httpClient.post<{ token: string }>(this.apiUrl, userData).subscribe(
      (response) => {
        const { token } = response;

        localStorage.setItem('token', token);

        this.router.navigate(['/home']);
      },
      (err) => {
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    );
  }
}
