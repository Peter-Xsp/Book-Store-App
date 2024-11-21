import { Component, OnInit } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';
import { Book } from '../services/book.service';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss',
})
export class ShoppingCardComponent implements OnInit {
  cartBooks: { book: Book; quantity: number }[] = [];
  totalCost: number = 0;
  userId: string = '';

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartBooks().subscribe((books) => {
      this.cartBooks = books;
      this.totalCost = this.cartService.getTotalCost();
    });
  }

  incrementQuantity(book: Book): void {
    this.cartService.addToCart(book);
  }

  decrementQuantity(book: Book): void {
    this.cartService.removeFromCart(book);
  }

  removeBook(book: Book): void {
    this.cartService.removeAllFromCart(book);
  }

  sendOrder(): void {
    this.userId = this.authService.getUserId();

    const orderBooks = this.cartBooks.map(({ book, quantity }) => ({
      book: { title: book.title, _id: book._id, price: book.price },
      quantity,
    }));

    this.orderService.createOrder(this.userId, orderBooks).subscribe(
      () => {
        alert('order placed successfully!');
        this.cartService.clearCart();
        this.router.navigate(['/my-orders']).then(() => {
          window.location.reload();
        });
      },
      (error) => {
        console.error('Error order:', error);
        alert('Failed to place order! please try again later!');
      }
    );
  }
}
