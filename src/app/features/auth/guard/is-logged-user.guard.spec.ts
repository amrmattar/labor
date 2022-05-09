import { TestBed } from '@angular/core/testing';

import { IsLoggedUserGuard } from './is-logged-user.guard';

describe('IsLoggedUserGuard', () => {
  let guard: IsLoggedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLoggedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
