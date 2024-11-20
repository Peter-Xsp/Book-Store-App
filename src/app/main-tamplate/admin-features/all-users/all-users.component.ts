import { Component, OnInit } from '@angular/core';
import { MainTamplateComponent } from '../../main-tamplate.component';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [MainTamplateComponent],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss',
})
export class AllUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
