import { Component, inject, linkedSignal, signal } from "@angular/core";
import { PaletteGeneratorService } from "../../services/palette-generator/palette-generator.service";
import { ColorPickerComponent } from "../color-picker/color-picker.component";
import { PaletteRowComponent } from "../palette-row/palette-row.component";
import { GetColorName } from "hex-color-to-color-name";

@Component({
  selector: "app-palette-generator-page",
  imports: [ColorPickerComponent, PaletteRowComponent],
  templateUrl: "./palette-generator-page.component.html",
  styleUrl: "./palette-generator-page.component.scss",
})
export class PaletteGeneratorPageComponent {
  private paletteGeneratorService = inject(PaletteGeneratorService);
  public palette: string[] = [];
  public selectedColor = signal("");
  public selectedColorName = linkedSignal(() => GetColorName(this.selectedColor()));

  protected updateHexColor(hexColor: string): void {
    this.selectedColor.set(hexColor);
    if (hexColor === "") {
      this.palette = [];
      return;
    }
    this.palette = this.paletteGeneratorService.generatePalette(hexColor);
    console.log(this.palette);
  }
}
