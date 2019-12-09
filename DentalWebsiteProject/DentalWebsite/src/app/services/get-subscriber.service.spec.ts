import { TestBed } from '@angular/core/testing';

import { GetSubscriberService } from './get-subscriber.service';

describe('GetSubscriberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSubscriberService = TestBed.get(GetSubscriberService);
    expect(service).toBeTruthy();
  });
});
