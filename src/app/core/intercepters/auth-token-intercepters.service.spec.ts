import { TestBed } from '@angular/core/testing';

import { AuthTokenInterceptersService } from './auth-token-intercepters.service';

describe('AuthTokenInterceptersService', () => {
  let service: AuthTokenInterceptersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTokenInterceptersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
