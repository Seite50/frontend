import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericrestService } from './genericrest.service';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService extends GenericrestService<Author> {

  constructor(
      private http: HttpClient
    ) {
      super(
        http,
        '/api/authors'
      );
    }
}
