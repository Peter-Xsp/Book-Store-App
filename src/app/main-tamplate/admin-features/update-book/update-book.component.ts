import { Component, OnInit } from '@angular/core';
import { MainTamplateComponent } from '../../main-tamplate.component';
import { Book, BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [MainTamplateComponent, FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.scss',
})
export class UpdateBookComponent implements OnInit {
  book: Book = {
    _id: '',
    title: '',
    description: '',
    price: 0,
    image: '',
  };

  fileInput: any;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe({
        next: (data) => {
          this.book = data;
        },
        error: () => {
          alert('Failed to load book details');
          this.router.navigate(['/home']);
        },
      });
    } else {
      alert('Invalid book ID');
      this.router.navigate(['/home']);
    }
  }

  updateBook(): void {
    const formData = new FormData();

    formData.append('title', this.book.title);
    formData.append('description', this.book.description);
    formData.append('price', this.book.price.toString());

    if (this.fileInput && this.fileInput.files.length > 0) {
      formData.append('image', this.fileInput.files[0]);
    }

    this.bookService.updateBook(this.book._id, formData).subscribe({
      next: () => {
        alert('Book updated successfully');
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Failed to update the book');
      },
    });
  }
}
