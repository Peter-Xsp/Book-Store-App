import { Component, OnInit } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';
import { Book } from '../books/book.service';
import { CartService } from './cart.service';
import { OrderService } from '../orders/order.service';
import { Router } from '@angular/router';

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

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartBooks().subscribe((books) => {
      this.cartBooks = books;
      this.totalCost = this.cartService.getTotalCost();
      console.log(books);
    });
  }

  removeBook(book: Book): void {
    this.cartService.removeFromCart(book);
  }

  sendOrder(): void {
    const userI = localStorage.getItem('userId')!;

    const orderBooks = this.cartBooks.map((book) => ({
      bookId: String(book._id),
      quantity: 1,
    }));

    this.orderService.createOrder(userI, orderBooks).subscribe(
      () => {
        alert('order placed successfully!');

        setTimeout(() => {
          this.router.navigate(['/my-orders']).then(() => {
            window.location.reload();
          });
        }, 5);
      },
      (error) => {
        console.error('Error order:', error);
        alert('Failed to place order! please try again later!');
      }
    );
  }
}
