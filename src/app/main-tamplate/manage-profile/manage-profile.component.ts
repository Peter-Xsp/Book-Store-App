import { Component, OnInit } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';
import { User, UserService } from '../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-profile',
  standalone: true,
  imports: [MainTamplateComponent, FormsModule, RouterLink],
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.scss',
})
export class ManageProfileComponent implements OnInit {
  user: User = {
    _id: '',
    name: '',
    email: '',
    password: '',
    role: '',
  };

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.userService.getUserById().subscribe({
        next: (data) => {
          this.user = data;
        },
        error: () => {
          alert('Failed to load book details');
          this.router.navigate(['/home']);
        },
      });
    } else {
      alert('Invalid user ID');
      this.router.navigate(['/home']);
    }
  }

  updateUser(): void {
    const updatedUserData: any = {
      name: this.user.name,
      email: this.user.email,
    };

    if (this.user.password) {
      updatedUserData.password = this.user.password;
    }

    this.userService.updateUser(updatedUserData).subscribe({
      next: () => {
        alert('user updated successfully');
        this.router.navigate(['/my-orders']);
      },
      error: () => {
        alert('Failed to update the user');
      },
    });
  }

  deleteUser(): void {
    if (confirm(`Are you sure you want to permanently delete your account?`)) {
      this.userService.deleteUser().subscribe({
        next: () => {
          localStorage.removeItem('token');
          this.router.navigate(['']);
        },
        error: () => {
          alert('Failed to delete the user');
        },
      });
    }
  }
}
