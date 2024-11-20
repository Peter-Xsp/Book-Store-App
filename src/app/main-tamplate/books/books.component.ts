import { Component, OnInit } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';
import { Book, BookService } from './book.service';
import { CartService } from '../shopping-card/cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  addedToCart: boolean[] = [];
  isAdmin: boolean = false;

  constructor(
    private bookService: BookService,
    private cartServise: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });

    this.isAdmin = this.authService.getUserRole() === 'admin';
  }

  onAddToCart(book: Book, index: number): void {
    this.cartServise.addToCart(book);

    this.addedToCart[index] = true;
    setTimeout(() => {
      this.addedToCart[index] = false;
    }, 300);
  }

  onAddBook(): void {
    this.router.navigate(['/add-book']);
  }

  onDeleteBook(_id: string): void {
    if (confirm(`delete this book?`)) {
      this.bookService.deleteBook(_id).subscribe({
        next: () => {
          window.location.reload();
        },
        error: () => {
          alert('Failed to delete the book');
        },
      });
    }
  }

  onUpdateBook(_id: string): void {
    this.router.navigate(['/update-book', _id]);
  }
}
