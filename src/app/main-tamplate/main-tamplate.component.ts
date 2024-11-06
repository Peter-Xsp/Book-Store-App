import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-tamplate',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-tamplate.component.html',
  styleUrl: './main-tamplate.component.scss',
})
export class MainTamplateComponent {}
