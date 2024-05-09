import { TestBed } from '@angular/core/testing';

import { ApiSerivcesService } from './api-serivces.service';

describe('ApiSerivcesService', () => {
  let service: ApiSerivcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSerivcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
