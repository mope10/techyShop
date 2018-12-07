import { TestBed } from '@angular/core/testing';

import { AuthGuardServiceAdminService } from './auth-guard-service-admin.service';

describe('AuthGuardServiceAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardServiceAdminService = TestBed.get(AuthGuardServiceAdminService);
    expect(service).toBeTruthy();
  });
});
