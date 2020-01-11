import { TestBed } from '@angular/core/testing';

import { GetEmployeeService } from './get-employee.service';

import { HttpClientModule} from '@angular/common/http';

describe('GetEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: GetEmployeeService = TestBed.get(GetEmployeeService);
    expect(service).toBeTruthy();
  });
});
