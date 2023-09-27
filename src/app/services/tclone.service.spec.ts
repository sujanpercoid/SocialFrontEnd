import { TestBed } from '@angular/core/testing';

import { TcloneService } from './tclone.service';

describe('TcloneService', () => {
  let service: TcloneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcloneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
