import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export class GenericrestService <T> {

  constructor(
    private httpClient: HttpClient,
    private restUrl: string,
  ) {}

  getItems(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.restUrl).pipe(
      catchError(this.handleError('getItems', []))
    );
  }
  private handleError<T2> (operation = 'operation', result?: T2) {
    return (error: any): Observable<T2> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T2);
    };
  }
}
