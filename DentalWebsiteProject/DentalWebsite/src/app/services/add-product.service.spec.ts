import { TestBed } from '@angular/core/testing';

import { AddProductService } from './add-product.service';

import { HttpClientModule} from '@angular/common/http';

describe('AddProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: AddProductService = TestBed.get(AddProductService);
    expect(service).toBeTruthy();
  });
});
