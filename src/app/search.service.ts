import { Injectable } from '@angular/core';
import { SearchResult } from './searchresult';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchUrl = '/api/search'
  private tmp

  //search for a book
  search(term: string): Observable<SearchResult> {
    if (!term.trim()) {
      return of(new SearchResult);
    }

    this.tmp = this.http.get<SearchResult>(`${this.searchUrl}/${term}`).pipe(
      catchError(this.handleError<SearchResult>('searchService', null))
    );
    console.log(this.tmp)
    return of(this.tmp)
 /*   return this.http.get<SearchResult>(`${this.searchUrl}/${term}`).pipe(
      catchError(this.handleError<SearchResult>('searchService', null))
    );*/
  }

  // Helper
  private log(message: string) {
    this.messageService.add(`BookService: ${message}`);
  }

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
  constructor(
    // Service for sending messages
    private messageService: MessageService,

    // Http client for calling the api
    private http: HttpClient
    ) { }
}
