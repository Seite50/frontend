import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IHasId} from './hasid';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class GenericrestService <T> {

  constructor(
    private httpClient: HttpClient,
    private restUrl: string,
  ) {}

  getItems(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.restUrl).pipe(
      tap(items => console.log("Got Items: " + JSON.stringify(items))),
      catchError(this.handleError('getItems', []))
    );
  }

  getItem(id: string): Observable<T> {
    const realUrl = `${this.restUrl}/${id}`;
    return this.httpClient.get<T>(realUrl).pipe(
      tap(item => console.log("Got Item: " + JSON.stringify(item))),
      catchError(this.handleError<T>(`getBook id=${id}`))
    );
  }

  addItem(item: T): Observable<T> {
    return this.httpClient.post<T>(this.restUrl, item, httpOptions).pipe(
      catchError(this.handleError<T>('addItem'))
    );
  }

  delteItem <T extends IHasId> (item: T | string): Observable<T> {
    const id = typeof item === 'string' ? item : item.id;
    const url = `${this.restUrl}/${id}`;

    return this.httpClient.delete<T>(url, httpOptions).pipe(
      catchError(this.handleError<T>('deleteHero'))
    );
  }

  // update a specific book
  updateItem <T extends IHasId> (item: T): Observable<any> {
    const url = `${this.restUrl}/${item.id}`;
    return this.httpClient.put(url, item, httpOptions).pipe(
      catchError(this.handleError<any>('updateItem'))
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
