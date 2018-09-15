import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorComponent } from './author/author.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MessagesComponent,
    BookDetailComponent,
    DashboardComponent,
    AuthorComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
