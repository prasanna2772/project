import { TestBed } from '@angular/core/testing';

import { ElementserviceService } from './elementservice.service';

describe('ElementserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementserviceService = TestBed.get(ElementserviceService);
    expect(service).toBeTruthy();
  });
});
