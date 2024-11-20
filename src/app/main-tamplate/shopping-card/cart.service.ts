import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../books/book.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartBooks: { book: Book; quantity: number }[] = [];
  private cartBooks$ = new BehaviorSubject<{ book: Book; quantity: number }[]>(
    this.cartBooks
  );

  addToCart(book: Book): void {
    const existingBook = this.cartBooks.find(
      (b) => b.book.title === book.title
    );
    if (existingBook) {
      existingBook.quantity++;
    } else {
      this.cartBooks.push({ book, quantity: 1 });
    }
    this.cartBooks$.next(this.cartBooks);
  }

  removeFromCart(book: Book): void {
    const bookIndex = this.cartBooks.findIndex(
      (b) => b.book.title === book.title
    );
    if (bookIndex !== -1) {
      this.cartBooks[bookIndex].quantity--;
      if (this.cartBooks[bookIndex].quantity <= 0) {
        this.cartBooks.splice(bookIndex, 1);
      }
      this.cartBooks$.next(this.cartBooks);
    }
  }

  removeAllFromCart(book: Book): void {
    this.cartBooks = this.cartBooks.filter((b) => b.book.title !== book.title);
    this.cartBooks$.next(this.cartBooks);
  }

  getCartBooks() {
    return this.cartBooks$.asObservable();
  }

  getTotalCost(): number {
    return this.cartBooks.reduce(
      (total, b) => total + b.book.price * b.quantity,
      0
    );
  }

  clearCart(): void {
    this.cartBooks = [];
    this.cartBooks$.next(this.cartBooks);
  }
}
