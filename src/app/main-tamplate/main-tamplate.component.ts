import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-main-tamplate',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-tamplate.component.html',
  styleUrl: './main-tamplate.component.scss',
})
export class MainTamplateComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.isAdmin = this.authService.getUserRole() === 'admin';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['']);
  }
}
