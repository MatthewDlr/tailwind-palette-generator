import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBarComponent } from './color-bar.component';

describe('ColorBarComponent', () => {
  let component: ColorBarComponent;
  let fixture: ComponentFixture<ColorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
