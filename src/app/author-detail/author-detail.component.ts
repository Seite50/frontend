import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../author';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  author: Author;

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorsService,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.authorService.getItem(id).subscribe(value => this.author = value);
  }

  onSubmit(): void {
    console.log("test")
    console.log(this.author);
    this.authorService.updateItem(this.author).subscribe();
  }
}
