import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import chroma from "chroma-js";
import { ColorPalette } from "../../types/ColorPalette.type";

@Component({
  selector: "app-palette-row",
  imports: [CommonModule],
  templateUrl: "./palette-row.component.html",
  styleUrl: "./palette-row.component.scss",
})
export class PaletteRowComponent {
  public colorPalette = input.required<ColorPalette>();

  public getTextColor(bgColor: string): string {
    const color = chroma(bgColor);
    const luminance = color.luminance();
    return luminance >= 0.2 ? "#000000" : "#FFFFFF";
  }

  public copyColorToClipboard(color: string): void {
    navigator.clipboard.writeText(color);
  }
}
