import { TestBed } from '@angular/core/testing';

import { ClipServiceService } from './clip-service.service';

describe('ClipServiceService', () => {
  let service: ClipServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
