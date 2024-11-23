import { TestBed } from '@angular/core/testing';

import { PaletteGeneratorService } from './palette-generator.service';

describe('PaletteGeneratorService', () => {
  let service: PaletteGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaletteGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
