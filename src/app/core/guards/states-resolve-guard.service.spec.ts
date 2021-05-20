import { TestBed } from '@angular/core/testing';

import { StatesResolveGuardService } from './states-resolve-guard.service';

describe('StatesResolveGuardService', () => {
  let service: StatesResolveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesResolveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
