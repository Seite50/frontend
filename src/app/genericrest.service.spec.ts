import { TestBed } from '@angular/core/testing';

import { GenericrestService } from './genericrest.service';

describe('GenericrestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericrestService = TestBed.get(GenericrestService);
    expect(service).toBeTruthy();
  });
});
