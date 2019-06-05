import { TestBed } from '@angular/core/testing';

import { PelisService } from './pelis.service';

describe('PelisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PelisService = TestBed.get(PelisService);
    expect(service).toBeTruthy();
  });
});
