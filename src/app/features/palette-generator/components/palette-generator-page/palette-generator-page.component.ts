import { Component, inject } from "@angular/core";
import { PaletteGeneratorService } from "../../services/palette-generator/palette-generator.service";
import { ColorPickerComponent } from "../color-picker/color-picker.component";
import { PaletteRowComponent } from "../palette-row/palette-row.component";

@Component({
  selector: "app-palette-generator-page",
  imports: [ColorPickerComponent, PaletteRowComponent],
  templateUrl: "./palette-generator-page.component.html",
  styleUrl: "./palette-generator-page.component.scss",
})
export class PaletteGeneratorPageComponent {
  private paletteGeneratorService = inject(PaletteGeneratorService);
  public palette: string[] = [];
  public selectedColor: string = "";

  protected updateHexColor(hexColor: string): void {
    this.selectedColor = hexColor;
    if (hexColor === "") {
      this.palette = [];
      return;
    }
    this.palette = this.paletteGeneratorService.generatePalette(hexColor);
    console.log(this.palette);
  }
}
