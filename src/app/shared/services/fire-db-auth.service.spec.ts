import { TestBed, inject } from '@angular/core/testing';

import { FireDbAuthService } from './fire-db-auth.service';

describe('FireDbAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireDbAuthService]
    });
  });

  it('should be created', inject([FireDbAuthService], (service: FireDbAuthService) => {
    expect(service).toBeTruthy();
  }));
});
