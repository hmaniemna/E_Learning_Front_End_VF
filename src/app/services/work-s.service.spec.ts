import { TestBed } from '@angular/core/testing';

import { WorkSService } from './work-s.service';

describe('WorkSService', () => {
  let service: WorkSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
