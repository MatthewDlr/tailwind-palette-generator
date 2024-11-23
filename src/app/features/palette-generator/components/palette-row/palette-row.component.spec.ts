import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteRowComponent } from './palette-row.component';

describe('PaletteRowComponent', () => {
  let component: PaletteRowComponent;
  let fixture: ComponentFixture<PaletteRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaletteRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaletteRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
