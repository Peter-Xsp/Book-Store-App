import { Component, inject } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [MainTamplateComponent, FormsModule, RouterLink],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
})
export class AddBookComponent {
  private httpClient = inject(HttpClient);

  constructor(private router: Router) {}

  title: string = '';
  description: string = '';
  price: number | null = null;
  imageURL: string = '';
  errorMessage: string = '';

  private apiUrl = 'http://localhost:3000/api/books';

  onSubmit() {
    const bookData = {
      title: this.title,
      description: this.description,
      price: this.price,
      imageURL: this.imageURL,
    };

    this.httpClient.post(this.apiUrl, bookData).subscribe({
      next: () => {
        alert('Book added successfully');
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      },
      error: () => {
        this.errorMessage = 'Failed to add book. Please try again.';
      },
    });
  }
}
