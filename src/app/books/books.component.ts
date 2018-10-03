import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(
    private bookService: BooksService
  ) { }

  getBooks(): void {
    this.bookService.getItems().subscribe(books => this.books = books);
  }

  ngOnInit() {
    this.getBooks();
  }

}
