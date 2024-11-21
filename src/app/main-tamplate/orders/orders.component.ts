import { Component, OnInit } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';
import { Order, OrderService } from '../services/order.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MainTamplateComponent, DatePipe, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (orders) => {
        this.orders = orders;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
}
