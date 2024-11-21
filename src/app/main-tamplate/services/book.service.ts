import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  title: string;
  description: string;
  price: number;
  imageURL: string;
  _id: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  updateBook(_id: string, book: Partial<Book>): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${_id}`, book);
  }

  getBookById(_id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${_id}`);
  }

  deleteBook(_id: string): Observable<Book> {
    return this.http.delete<Book>(`${this.apiUrl}/${_id}`);
  }
}
