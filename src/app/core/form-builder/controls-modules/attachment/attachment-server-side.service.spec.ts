import { TestBed } from '@angular/core/testing';

import { AttachmentServerSideService } from './attachment-server-side.service';

describe('AttachmentServerSideService', () => {
  let service: AttachmentServerSideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttachmentServerSideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
