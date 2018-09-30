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

  book: Observable<Book>;
  form: FormGroup;
  //author: Author;
  authorList: Author[];

  constructor(  private route: ActivatedRoute,
    private bookService: BooksService,
    private authorService: AuthorsService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nameControl: [null,Validators.required],
      authorsControl: [null, Validators.required],
    });
    let id = this.route.snapshot.paramMap.get('id');

    this.book = this.bookService.getItem(id).pipe(
      tap(book => this.form.get('nameControl').setValue(book.name))
    );

    this.authorService.getItems().subscribe(authors => this.authorList = authors);

    this.form.get('authors').valueChanges.subscribe(value => { 
      console.log(value);
    });
  }

  getAuthors(): void {
    this.authorService.getItems().subscribe(authors => this.authorList = authors);
  }

  submit(): void {
    console.log("test");

    let authorIds: string[];
    let authorsToSave: Author[];
    authorIds = this.form.get('authorsControl').value;

    authorIds.forEach(id => {
      this.authorService.getItem(id).subscribe(value => {
        authorsToSave.push(value);
      });
    });
    console.log(authorsToSave);
    this.book.subscribe(value => {
      value.name = this.form.get('nameControl').value;
      value.authors = authorsToSave;
      this.bookService.updateItem(value);
    });
  }
}
