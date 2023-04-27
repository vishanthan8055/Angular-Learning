import { TestBed } from '@angular/core/testing';

import { ComplaintsService } from './complaints.service';

describe('ComplaintsService', () => {
  let service: ComplaintsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
