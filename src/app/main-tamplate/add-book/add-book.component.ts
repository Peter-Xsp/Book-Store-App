import { Component } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
})
export class AddBookComponent {}
