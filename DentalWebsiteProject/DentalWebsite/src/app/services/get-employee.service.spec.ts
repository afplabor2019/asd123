import { TestBed } from '@angular/core/testing';

import { GetEmployeeService } from './get-employee.service';

describe('GetEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetEmployeeService = TestBed.get(GetEmployeeService);
    expect(service).toBeTruthy();
  });
});
