import { TestBed } from '@angular/core/testing';

import { GetProductService } from './get-product.service';

describe('GetProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProductService = TestBed.get(GetProductService);
    expect(service).toBeTruthy();
  });
});
