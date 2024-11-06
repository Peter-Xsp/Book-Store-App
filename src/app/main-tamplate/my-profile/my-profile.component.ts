import { Component } from '@angular/core';
import { MainTamplateComponent } from '../main-tamplate.component';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {}
