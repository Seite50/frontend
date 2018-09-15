import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = '/api/books/' 

  constructor(private messageService: MessageService,private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      catchError(this.handleError('getBooks', []))
    )
  }

  getBook(id: string): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  updateBook (book: Book): Observable<any> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put(url, book, httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      catchError(this.handleError<Book>('addBook'))
    );
  }

  deleteBook (book: Book | string): Observable<Book> {
    const id = typeof book === 'string' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;
  
    this.log(book.toString())
    return this.http.delete<Book>(url, httpOptions).pipe(
      catchError(this.handleError<Book>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Book[]>('bookService', []))
    );
  }
  
  private log(message: string) {
    this.messageService.add(`BookService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
