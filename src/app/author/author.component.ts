import { Component, OnInit } from '@angular/core';
import { Author } from "../author"
import { AuthorService} from "../author.service"

@Component({
  selector: 'app-authors',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: Author[];

  getAuthor(): void {
    this.authorService.getAuthors().subscribe(authors => this.authors = authors);
  }

  add(givenname: string, surname: string): void {
    givenname = givenname.trim();
    surname = surname.trim();

    if (!surname && !givenname) { return; }
    this.authorService.addAuthor({ givenname, surname } as Author)
      .subscribe(author => {
        this.authors.push(author);
      });
  }

  delete(author: Author): void {
    this.authors = this.authors.filter(h => h !== author);
    this.authorService.deleteAuthor(author).subscribe();
  }

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthor()
  }

}
