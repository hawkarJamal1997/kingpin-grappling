import { TestBed } from '@angular/core/testing';

import { GrapplingTypeService } from './grapplingtype.service';

describe('GrapplingTypeService', () => {
  let service: GrapplingTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrapplingTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
