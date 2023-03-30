import { TestBed } from '@angular/core/testing';

import { BandiereService } from './bandiere.service';

describe('BandiereService', () => {
  let service: BandiereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
