import { Injectable } from '@angular/core';
import { MessageService} from './message.service';
import { HttpClient } from '@angular/common/http';
import { GenericrestService } from './genericrest.service';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService extends GenericrestService<Book> {


  constructor(
      private http: HttpClient
    ) {
      super(
        http,
        '/api/books'
      );
    }

}
