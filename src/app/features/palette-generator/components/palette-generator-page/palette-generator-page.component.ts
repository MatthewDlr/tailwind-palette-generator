import { Component, inject, linkedSignal, signal } from "@angular/core";
import { GetColorName } from "hex-color-to-color-name";
import { PaletteGeneratorService } from "../../services/palette-generator/palette-generator.service";
import { ColorPalette } from "../../types/ColorPalette.type";
import { CodeExportBlocComponent } from "../code-export-bloc/code-export-bloc.component";
import { ColorPickerComponent } from "../color-picker/color-picker.component";
import { PaletteRowComponent } from "../palette-row/palette-row.component";
import { UiPreviewComponent } from "../ui-preview/ui-preview.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-palette-generator-page",
  imports: [CommonModule, ColorPickerComponent, PaletteRowComponent, CodeExportBlocComponent, UiPreviewComponent],
  templateUrl: "./palette-generator-page.component.html",
  styleUrl: "./palette-generator-page.component.scss",
})
export class PaletteGeneratorPageComponent {
  private paletteGeneratorService = inject(PaletteGeneratorService);
  public selectedColor = signal("");
  public colorPalette = linkedSignal(() => {
    if (this.selectedColor() === "") return undefined;
    return {
      mainColor: this.selectedColor(),
      colorName: GetColorName(this.selectedColor()),
      colors: this.paletteGeneratorService.generatePaletteColors(this.selectedColor()),
    } as ColorPalette;
  });
  public isExportPopupVisible = signal(false);
}
