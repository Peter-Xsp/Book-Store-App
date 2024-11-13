import { Component, OnInit } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';
import { Book } from '../books/book.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss',
})
export class ShoppingCardComponent implements OnInit {
  cartBooks: Book[] = [];
  totalCost: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartBooks().subscribe((books) => {
      this.cartBooks = books;
      this.totalCost = this.cartService.getTotalCost();
    });
  }

  removeBook(book: Book): void {
    this.cartService.removeFromCart(book);
  }
}
