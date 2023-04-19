import { TestBed } from '@angular/core/testing';

import { FeedbackserviceService } from './feedbackservice.service';

describe('FeedbackserviceService', () => {
  let service: FeedbackserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
