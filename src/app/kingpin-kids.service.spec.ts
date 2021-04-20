import { TestBed } from '@angular/core/testing';

import { KingpinKidsService } from './kingpin-kids.service';

describe('KingpinKidsService', () => {
  let service: KingpinKidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KingpinKidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
