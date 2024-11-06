import { Component } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss',
})
export class ShoppingCardComponent {}
