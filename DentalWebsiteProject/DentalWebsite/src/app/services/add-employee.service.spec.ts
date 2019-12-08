import { TestBed } from '@angular/core/testing';

import { AddEmployeeService } from './add-employee.service';

describe('AddEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEmployeeService = TestBed.get(AddEmployeeService);
    expect(service).toBeTruthy();
  });
});
