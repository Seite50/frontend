import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../author';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthorService }  from '../author.service';
@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  @Input() author: Author;

  constructor(  private route: ActivatedRoute,
    private authorService: AuthorService,
    private location: Location) { }

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthor(id)
      .subscribe(author => this.author = author);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.authorService.updateAuthor(this.author)
      .subscribe(() => this.goBack());
  }
}
