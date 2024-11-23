import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteGeneratorPageComponent } from './palette-generator-page.component';

describe('PaletteGeneratorPageComponent', () => {
  let component: PaletteGeneratorPageComponent;
  let fixture: ComponentFixture<PaletteGeneratorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaletteGeneratorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaletteGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
