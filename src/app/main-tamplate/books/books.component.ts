import { Component } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {}
