import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/all`);
  }

  getUserById(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }

  updateUser(user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/me`, user);
  }

  deleteUser(): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/me`);
  }
}
