import { TestBed } from '@angular/core/testing';

import { VarderingarService } from './varderingar.service';

describe('VarderingarService', () => {
  let service: VarderingarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarderingarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
