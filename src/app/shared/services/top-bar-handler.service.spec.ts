import { TestBed } from '@angular/core/testing';

import { TopBarHandlerService } from './top-bar-handler.service';

describe('TopBarHandlerService', () => {
  let service: TopBarHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopBarHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
