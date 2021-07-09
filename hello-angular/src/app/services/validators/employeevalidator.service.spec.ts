import { TestBed } from '@angular/core/testing';

import { EmployeevalidatorService } from './employeevalidator.service';

describe('EmployeevalidatorService', () => {
  let service: EmployeevalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeevalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
