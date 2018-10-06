import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';

import { BooksComponent } from './books.component';
import { BooksService } from '../books.service';

describe('BooksComponent', () => {
  let fixture: ComponentFixture<BooksComponent>;
  let component: BooksComponent;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksComponent],
      imports: [ RouterTestingModule, MatMenuModule, MatListModule, HttpClientModule],
      providers: [ BooksService ]
    });

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
