import { Component } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {}
