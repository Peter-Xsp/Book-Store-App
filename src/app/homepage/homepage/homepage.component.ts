import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { HomeBackroundComponent } from '../home-backround.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ButtonModule, HomeBackroundComponent, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
