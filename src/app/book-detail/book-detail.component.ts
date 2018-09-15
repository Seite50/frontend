import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService }  from '../book.service';
import { AuthorService } from '../author.service';
import { Author } from '../author';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() book: Book;
  author: Author;
  authors: Author[]
  bookForm: FormGroup;

  constructor(  private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private fb: FormBuilder,
    private location: Location) { }

  ngOnInit() {
    this.getBook();
    this.getAuthors();
    this.fb.group({bookControl: this.book.authors})
    //this.bookForm = this.fb.group({
   //   bookControl: this.book.authors
   // });
  }
  
  getAuthors(): void {
    this.authorService.getAuthors().subscribe(authors => this.authors = authors)
  }

  getBook(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.info(this.book)
    this.bookService.updateBook(this.book)
      .subscribe(() => this.goBack());
  }
}
