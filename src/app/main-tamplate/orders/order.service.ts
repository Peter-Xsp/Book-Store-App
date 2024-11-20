import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Order {
  _id: string;
  user: string;
  books: {
    book: { _id: string; title: string; price: number };
    quantity: number;
  }[];
  total: number;
  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) {}

  createOrder(
    userId: string,
    books: {
      book: { _id: string; title: string; price: number };
      quantity: number;
    }[]
  ): Observable<Order> {
    const orderData = { userId, books };
    return this.http.post<Order>(this.apiUrl, orderData);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }
}
