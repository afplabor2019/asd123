import { TestBed } from '@angular/core/testing';

import { GetSubscriberService } from './get-subscriber.service';

import { HttpClientModule} from '@angular/common/http';

describe('GetSubscriberService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: GetSubscriberService = TestBed.get(GetSubscriberService);
    expect(service).toBeTruthy();
  });
});
