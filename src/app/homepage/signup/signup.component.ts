import { Component } from '@angular/core';
import { HomeBackroundComponent } from '../home-backround.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HomeBackroundComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}
