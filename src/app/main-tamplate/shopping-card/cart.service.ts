import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../books/book.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartBooks: Book[] = [];
  private cartBooks$ = new BehaviorSubject<Book[]>(this.cartBooks);
  private idCounter = 1;

  addToCart(book: Book) {
    const bookWithId = { ...book, id: this.idCounter++ };
    this.cartBooks.push(bookWithId);
    this.cartBooks$.next(this.cartBooks);
  }

  removeFromCart(book: Book) {
    const bookIndex = this.cartBooks.findIndex((b) => b._id === book._id);
    if (bookIndex !== -1) {
      this.cartBooks.splice(bookIndex, 1);
      this.cartBooks$.next(this.cartBooks);
    }
  }

  getCartBooks() {
    return this.cartBooks$.asObservable();
  }

  getTotalCost(): number {
    return this.cartBooks.reduce((total, book) => total + book.price, 0);
  }
}
