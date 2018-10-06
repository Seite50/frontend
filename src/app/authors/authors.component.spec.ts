import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule} from '@angular/material/list';

import { AuthorsComponent } from './authors.component';
import { AuthorsService } from '../authors.service';

describe('AuthorsComponent', () => {
  let fixture: ComponentFixture<AuthorsComponent>;
  let component: AuthorsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsComponent],
      imports: [ RouterTestingModule, HttpClientModule, MatListModule],
      providers: [ AuthorsService ]
    });

    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
