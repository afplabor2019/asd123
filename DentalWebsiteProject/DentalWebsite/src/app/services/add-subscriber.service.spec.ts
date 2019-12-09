import { TestBed } from '@angular/core/testing';

import { AddSubscriberService } from './add-subscriber.service';

describe('AddSubscriberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSubscriberService = TestBed.get(AddSubscriberService);
    expect(service).toBeTruthy();
  });
});
