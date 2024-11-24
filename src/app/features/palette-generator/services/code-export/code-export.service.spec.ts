import { TestBed } from '@angular/core/testing';

import { CodeExportService } from './code-export.service';

describe('CodeExportService', () => {
  let service: CodeExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
