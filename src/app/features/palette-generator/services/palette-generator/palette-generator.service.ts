import { Injectable } from "@angular/core";
import chroma from "chroma-js";

@Injectable({
  providedIn: "root",
})
export class PaletteGeneratorService {
  constructor() {}

  public convertHexToOklch(hexColor: string): [number, number, number, number?] {
    const oklchColor = chroma(hexColor).oklch();
    return oklchColor;
  }

  public convertOklchToHex(oklchColor: [number, number, number, number?]): string {
    const hexColor = chroma.oklch(...oklchColor).hex();
    return hexColor;
  }

  public generatePalette(hexColor: string): string[] {
    // Calculate luminance (0 = black, 1 = white)
    const luminance = chroma(hexColor).luminance();
    const offset = luminance >= 0.5 ? 1 : 0.9;
    const basePosition = Math.round((offset - luminance) * 10) / 10;

    // Create a dynamic domain (custom stops for the scale)
    const domain = [0, basePosition, 1];

    const scale = chroma.scale(["white", hexColor, "black"]).domain(domain).mode("lab");
    let palette = scale.colors(13);
    palette.shift();
    palette.pop();

    //if hex color is not in the palette, find the closest color and replace it
    if (!palette.includes("#" + hexColor)) {
      let closestColor = chroma(hexColor).alpha(1).css();
      let closestColorIndex = 0;
      let minDistance = 1000;
      for (let i = 0; i < palette.length; i++) {
        let distance = chroma.distance(palette[i], closestColor);
        if (distance < minDistance) {
          minDistance = distance;
          closestColorIndex = i;
        }
      }
      palette[closestColorIndex] = "#" + hexColor;
    }

    return palette;
  }
}
