import { TestBed } from '@angular/core/testing';

import { LeavePageGuardGuard } from './leave-page-guard.guard';

describe('LeavePageGuardGuard', () => {
  let guard: LeavePageGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeavePageGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
