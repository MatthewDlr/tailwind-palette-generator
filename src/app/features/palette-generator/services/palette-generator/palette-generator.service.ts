import { Injectable } from "@angular/core";
import chroma from "chroma-js";
import { PaletteColor } from "../../types/ColorPalette.type";

@Injectable({
  providedIn: "root",
})
export class PaletteGeneratorService {
  public generatePaletteColors(hexColor: string): PaletteColor[] {
    const lum = chroma(hexColor).luminance(); // The closer to 1, the lighter the color

    const middle = lum < 0.5 ? 0.5 : lum > 0.75 ? 0.4 : 0.45; 

    const scale = chroma.scale(["white", hexColor, "black"]).domain([0, middle, 1]).mode("lab");

    const paletteColors = scale.colors(13);
    paletteColors.shift(); // remove white
    paletteColors.pop(); // remove black

    // If the hex color is not already in the palette, replace the closest color
    if (!paletteColors.includes("#" + hexColor)) {
      const closestColor = chroma(hexColor).alpha(1).css();
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

    return paletteColors.map((hexCode, index) => ({
      hexCode,
      shade: this.getShadeFromIndex(index),
    }));
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
