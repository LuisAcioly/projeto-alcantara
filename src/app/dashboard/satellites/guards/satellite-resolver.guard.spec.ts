import { TestBed } from '@angular/core/testing';

import { SatelliteResolverGuard } from './satellite-resolver.guard';

describe('SatelliteResolverGuard', () => {
  let guard: SatelliteResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SatelliteResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
