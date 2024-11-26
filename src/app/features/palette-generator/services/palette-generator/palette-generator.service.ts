import { Injectable } from "@angular/core";
import chroma from "chroma-js";
import { PaletteColor } from "../../types/ColorPalette.type";

@Injectable({
  providedIn: "root",
})
export class PaletteGeneratorService {
  public generatePaletteColors(hexColor: string): PaletteColor[] {
    // Calculate luminance (0 = black, 1 = white)
    const luminance = chroma(hexColor).luminance();
    const offset = luminance >= 0.5 ? 1 : luminance >= 0.3 ? 0.9 : 0.8;
    const basePosition = Math.round((offset - luminance) * 10) / 10;

    // Create a dynamic domain (custom stops for the scale)
    const domain = [0, basePosition, 1];

    const scale = chroma.scale(["white", hexColor, "black"]).domain(domain).mode("lab");
    const paletteColors = scale.colors(13);
    paletteColors.shift(); //remove white
    paletteColors.pop(); //remove black

    //if hex color is not in the palette, find the closest color and replace it
    if (!paletteColors.includes("#" + hexColor)) {
      const  closestColor = chroma(hexColor).alpha(1).css();
      let closestColorIndex = 0;
      let minDistance = 1000;
      for (let i = 0; i < paletteColors.length; i++) {
        const distance = chroma.distance(paletteColors[i], closestColor);
        if (distance < minDistance) {
          minDistance = distance;
          closestColorIndex = i;
        }
      }
      paletteColors[closestColorIndex] = "#" + hexColor;
    }

    return paletteColors.map((hexCode, index) => ({ hexCode, shade: this.getShadeFromIndex(index) }));
  }

  private getShadeFromIndex(index: number): number {
    if (index === 0) {
      return 50;
    } else if (index === 10) {
      return 950;
    }
    return index * 100;
  }
}
