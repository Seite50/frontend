import { Component, OnInit } from '@angular/core';
import { AuthorsService} from '../authors.service';
import { Author } from '../author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorsList: Author[];

  constructor(
    private authorsService: AuthorsService,
  ) { }

  ngOnInit() {
    this.authorsService.getItems().subscribe(value => this.authorsList = value);
  }

}
