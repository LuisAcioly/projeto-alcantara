import { TestBed } from '@angular/core/testing';

import { RocketResolverGuard } from './rocket-resolver.guard';

describe('RocketResolverGuard', () => {
  let guard: RocketResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RocketResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
