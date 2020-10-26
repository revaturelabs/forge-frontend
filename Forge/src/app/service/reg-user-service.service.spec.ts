import { TestBed } from '@angular/core/testing';

import { RegisterUserService } from './reg-user-service.service';

describe('RegUserServiceService', () => {
  let service: RegisterUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
