import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GenericrestService } from './genericrest.service';
import { Author } from './author';
import { AuthorsService } from './authors.service';

describe('GenericrestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule], 
    providers: [{ provide: GenericrestService, useClass: AuthorsService }]
  }));

  it('should be created', () => {
    const service: GenericrestService<Author> = TestBed.get(GenericrestService);
    expect(service).toBeTruthy();
  });
});
