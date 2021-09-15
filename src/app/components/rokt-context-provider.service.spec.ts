import { TestBed } from '@angular/core/testing';

import { RoktContextProviderService } from './rokt-context-provider.service';

describe('RoktContextProviderService', () => {
  let service: RoktContextProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoktContextProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
