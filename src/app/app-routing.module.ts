import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component'
import { BookDetailComponent }  from './book-detail/book-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorComponent } from './author/author.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'authors', component: AuthorComponent },
  { path: 'authors/:id', component: AuthorDetailComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}

