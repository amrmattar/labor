import { TestBed } from '@angular/core/testing';

import { RoleCheakerGuard } from './role-cheaker.guard';

describe('RoleCheakerGuard', () => {
  let guard: RoleCheakerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleCheakerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
