import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MainTamplateComponent } from '../../main-tamplate.component';
import { environment } from '../../../../environments/environment';

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
  imageFile: File | null = null;
  errorMessage: string = '';

  private apiUrl = `${environment.apiUrl}/books`;

  onSubmit() {
    if (!this.imageFile) {
      this.errorMessage = 'Please upload an image.';
      return;
    }

    const bookData = new FormData();
    bookData.append('title', this.title);
    bookData.append('description', this.description);
    bookData.append('price', this.price?.toString() || '');
    bookData.append('image', this.imageFile);

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

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.imageFile = target.files[0];
      console.log('Selected file:', this.imageFile); // Log to check the file
    }
  }
}
