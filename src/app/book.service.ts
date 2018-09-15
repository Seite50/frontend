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

  // Default api url for operating with books
  private booksUrl = '/api/books/' 

  constructor(
    // Service for sending messages
    private messageService: MessageService,

    // Http client for calling the api
    private http: HttpClient
    ) { }

  // get a list of all books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      catchError(this.handleError('getBooks', []))
    )
  }

  // get a specific book
  getBook(id: string): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  // update a specific book
  updateBook (book: Book): Observable<any> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put(url, book, httpOptions).pipe(
      catchError(this.handleError<any>('updateBook'))
    );
  }

  // add a book to the store
  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      catchError(this.handleError<Book>('addBook'))
    );
  }

  // delete a book from the store
  deleteBook (book: Book | string): Observable<Book> {
    const id = typeof book === 'string' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;
  
    this.log(book.toString())
    return this.http.delete<Book>(url, httpOptions).pipe(
      catchError(this.handleError<Book>('deleteHero'))
    );
  }


  
  // Helper
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
