import { CommonModule } from "@angular/common";
import { Component, effect, input, linkedSignal } from "@angular/core";
import chroma from "chroma-js";

@Component({
  selector: "app-palette-row",
  imports: [CommonModule],
  templateUrl: "./palette-row.component.html",
  styleUrl: "./palette-row.component.scss",
})
export class PaletteRowComponent {
  public palette = input<string[]>([]);
  public selectedColor = input<string>("");

  constructor() {
    effect(() => {
      console.log(this.palette());
      console.log(this.selectedColor());
    });
  }

  public getTextColor(bgColor: string): string {
    const color = chroma(bgColor);
    const luminance = color.luminance();
    const textColor = luminance > 0.5 ? color.darken(3).hex() : color.brighten(3).hex();

    return textColor;
  }

  public getColorNumber(index: number): string {
    switch (index) {
      case 0:
        return "50";
      case 10:
        return "950";
      default:
        return String(index * 100);
    }
  }

  public copyColorToClipboard(color: string): void {
    navigator.clipboard.writeText(color);
  }
}
