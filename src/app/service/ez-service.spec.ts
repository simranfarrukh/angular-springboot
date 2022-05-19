import { TestBed } from '@angular/core/testing';

import { EZService } from './ez-service';

describe('EZService', () => {
  let service: EZService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EZService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
