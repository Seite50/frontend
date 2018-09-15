import { Injectable } from '@angular/core';
import { Author } from './author';
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
export class AuthorService {

  private authorUrl = '/api/authors/' 

  constructor(
    // Service for sending messages
    private messageService: MessageService,

    // Http client for calling the api
    private http: HttpClient
    ) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorUrl).pipe(
      catchError(this.handleError('getAuthor', []))
    )
  }

  getAuthor(id: string): Observable<Author> {
    const url = `${this.authorUrl}/${id}`;
    return this.http.get<Author>(url).pipe(
      catchError(this.handleError<Author>(`getAuthor id=${id}`))
    );
  }

  updateAuthor (author: Author): Observable<any> {
    const url = `${this.authorUrl}/${author.id}`;
    return this.http.put(url, author, httpOptions).pipe(
      catchError(this.handleError<any>('updateAuthor'))
    );
  }

  // add a book to the store
  addAuthor (author: Author): Observable<Author> {
    return this.http.post<Author>(this.authorUrl, author, httpOptions).pipe(
      catchError(this.handleError<Author>('addAuthor'))
    );
  }

  // delete a book from the store
  deleteAuthor (author: Author | string): Observable<Author> {
    const id = typeof author === 'string' ? author : author.id;
    const url = `${this.authorUrl}/${id}`;

    return this.http.delete<Author>(url, httpOptions).pipe(
      catchError(this.handleError<Author>('deleteAuthor'))
    );
  }


  
  // Helper
  private log(message: string) {
    this.messageService.add(`AuthorService: ${message}`);
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
