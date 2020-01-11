import { TestBed } from '@angular/core/testing';

import { AddSubscriberService } from './add-subscriber.service';

import { HttpClientModule} from '@angular/common/http';

describe('AddSubscriberService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: AddSubscriberService = TestBed.get(AddSubscriberService);
    expect(service).toBeTruthy();
  });
});
