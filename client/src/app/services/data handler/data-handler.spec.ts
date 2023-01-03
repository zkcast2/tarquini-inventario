import { TestBed } from '@angular/core/testing';

import { dataHandlerService } from './data-handler';

describe('dataHandlerService', () => {
  let service: dataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
