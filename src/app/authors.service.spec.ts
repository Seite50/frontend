import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule], 
    providers: [AuthorsService]
  }));

  it('should be created', () => {
    const service: AuthorsService = TestBed.get(AuthorsService);
    expect(service).toBeTruthy();
  });
});
