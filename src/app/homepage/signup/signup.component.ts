import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { HomeBackroundComponent } from '../home-backround.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HomeBackroundComponent, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  private httpClient = inject(HttpClient);

  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private apiUrl = 'http://localhost:3000/api/auth/signup';

  onSubmit() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.httpClient.post(this.apiUrl, userData).subscribe({
      next: (response) => {
        console.log('User created successfully', response);
        alert('Signup successful');
      },
      error: (error) => {
        console.error('Error during signup', error);
        this.errorMessage = 'Signup failed!';
      },
    });
  }
}
