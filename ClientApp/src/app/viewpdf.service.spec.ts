import { TestBed } from '@angular/core/testing';

import { ViewpdfService } from './viewpdf.service';

describe('ViewpdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewpdfService = TestBed.get(ViewpdfService);
    expect(service).toBeTruthy();
  });
});
