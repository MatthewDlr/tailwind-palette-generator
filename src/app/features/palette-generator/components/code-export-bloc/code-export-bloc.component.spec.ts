import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExportBlocComponent } from './code-export-bloc.component';

describe('CodeExportBlocComponent', () => {
  let component: CodeExportBlocComponent;
  let fixture: ComponentFixture<CodeExportBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeExportBlocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeExportBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
