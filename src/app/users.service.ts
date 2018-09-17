import { Injectable } from '@angular/core';
import { MessageService} from './message.service';
import { HttpClient } from '@angular/common/http';
import { GenericrestService } from './genericrest.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends GenericrestService<User> {

  constructor(
      private http: HttpClient
    ) {
      super(
        http,
        '/api/books'
      );
    }

}
