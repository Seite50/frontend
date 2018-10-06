import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule} from '@angular/forms';
import { MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AuthorDetailComponent } from './author-detail.component';
import { AuthorsService } from '../authors.service';

describe('AuthorDetailComponent', () => {
  let fixture: ComponentFixture<AuthorDetailComponent>;
  let component: AuthorDetailComponent;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorDetailComponent ], 
      imports: [HttpClientModule, FormsModule, MatFormFieldModule, MatListModule],
      providers: [ 
          { 
            provide: ActivatedRoute, 
            useValue: {
                paramMap: of({ get: (id) => 'test-value' })
            }
        },
        AuthorsService ]
    });

    fixture = TestBed.createComponent(AuthorDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
