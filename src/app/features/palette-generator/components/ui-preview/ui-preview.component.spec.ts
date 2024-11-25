import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPreviewComponent } from './ui-preview.component';

describe('UiPreviewComponent', () => {
  let component: UiPreviewComponent;
  let fixture: ComponentFixture<UiPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
