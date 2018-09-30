import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BooksService } from '../books.service';
import { AuthorsService } from '../authors.service';
import { Author } from '../author';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  authorList: Author[];

  constructor(  private route: ActivatedRoute,
    private bookService: BooksService,
    private authorService: AuthorsService,
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.bookService.getItem(id).subscribe(book => this.book = book);
    this.authorService.getItems().subscribe(authors => this.authorList = authors);
  }

  onSubmit(): void {
    console.log("test")
    console.log(this.book);
  }
}
