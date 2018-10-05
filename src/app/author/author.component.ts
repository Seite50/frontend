import { Component, OnInit } from '@angular/core';
import { Author } from "../author"
import { AuthorsService} from "../authors.service"

@Component({
  selector: 'app-authors',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: Author[];

  getAuthor(): void {
    this.authorService.getItems().subscribe(authors => this.authors = authors);
  }

  add(firstname: string, lastname: string): void {
    firstname = firstname.trim();
    lastname = lastname.trim();

    if (!lastname && !firstname) { return; }
    this.authorService.addItem({ firstname, lastname } as Author)
      .subscribe(author => {
        this.authors.push(author);
      });
  }

  delete(author: Author): void {
    this.authors = this.authors.filter(h => h !== author);
    this.authorService.deleteItem(author).subscribe();
  }

  constructor(private authorService: AuthorsService) { }

  ngOnInit() {
    this.getAuthor()
  }

}
