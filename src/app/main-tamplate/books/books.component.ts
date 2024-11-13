import { Component, OnInit } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';
import { Book, BookService } from './book.service';
import { CartService } from '../shopping-card/cart.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private cartServise: CartService
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => (this.books = data));
  }

  addToCart(book: Book) {
    this.cartServise.addToCart(book);
  }
}
