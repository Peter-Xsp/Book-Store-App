import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-tamplate',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-tamplate.component.html',
  styleUrl: './main-tamplate.component.scss',
})
export class MainTamplateComponent {
  private router = inject(Router);

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['']);
  }
}
