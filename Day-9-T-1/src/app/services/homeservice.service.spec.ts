import { TestBed } from '@angular/core/testing';

import { HomeserviceService } from './homeservice.service';

describe('HomeserviceService', () => {
  let service: HomeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
