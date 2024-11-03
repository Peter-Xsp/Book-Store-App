import { Component } from '@angular/core';
import { HomeBackroundComponent } from '../home-backround.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeBackroundComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
