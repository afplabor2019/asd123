import { TestBed } from '@angular/core/testing';

import { AddEmployeeService } from './add-employee.service';

import { HttpClientModule} from '@angular/common/http';

describe('AddEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: AddEmployeeService = TestBed.get(AddEmployeeService);
    expect(service).toBeTruthy();
  });
});
