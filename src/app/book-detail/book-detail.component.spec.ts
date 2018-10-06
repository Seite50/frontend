import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule} from '@angular/forms';
import { MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { BookDetailComponent } from './book-detail.component';
import { BooksService } from '../books.service';
import { AuthorsService } from '../authors.service';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailComponent],
      imports: [HttpClientModule, MatListModule, MatFormFieldModule, MatSelectModule, FormsModule],
      providers: [ 
        { 
          provide: ActivatedRoute, 
          useValue: {
            paramMap: of({ get: (id) => 'test-value' })
          }
        },
        BooksService, 
        AuthorsService ]
    });

    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
