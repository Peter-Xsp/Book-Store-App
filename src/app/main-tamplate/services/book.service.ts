import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Book {
  title: string;
  description: string;
  price: number;
  image: string;
  _id: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = `${environment.apiUrl}/books`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  updateBook(_id: string, formData: FormData): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${_id}`, formData);
  }

  getBookById(_id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${_id}`);
  }

  deleteBook(_id: string): Observable<Book> {
    return this.http.delete<Book>(`${this.apiUrl}/${_id}`);
  }
}
