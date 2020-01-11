import { TestBed } from '@angular/core/testing';

import { GetProductService } from './get-product.service';

import { HttpClientModule} from '@angular/common/http';

describe('GetProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: GetProductService = TestBed.get(GetProductService);
    expect(service).toBeTruthy();
  });
});
