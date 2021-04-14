import { TestBed } from '@angular/core/testing';

import { InriktningarService } from './inriktningar.service';

describe('InriktningarService', () => {
  let service: InriktningarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InriktningarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
