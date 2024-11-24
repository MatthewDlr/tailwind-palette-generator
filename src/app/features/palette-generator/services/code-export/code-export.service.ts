import { Injectable } from "@angular/core";
import chroma from "chroma-js";
import { ColorPalette } from "../../types/ColorPalette.type";

@Injectable({
  providedIn: "root",
})
export class CodeExportService {
  constructor() {}

  public generateCodeFromPalette(colorPalette: ColorPalette, tailwindVersion: "4.x" | "3.x"): string {
    const palette = { ...colorPalette };
    palette.colorName = this.toCamelCase(palette.colorName);

    if (tailwindVersion === "4.x") {
      return this.generateNewTailwindConfig(palette);
    }
    return "this.generateOldTailwindConfig(exportPalette, colorName)";
  }

  private generateNewTailwindConfig(colorPalette: ColorPalette): string {
    const colorName = colorPalette.colorName;
    return `@theme {
${colorPalette.colors.map(color => "    " + this.generateNewTailwindColor(colorName, color.hexCode, color.shade)).join("\n")}
  }`;
  }

  private generateNewTailwindColor(colorName: string, color: string, shade: number): string {
    const LongOklch = chroma(color).oklch();
    const oklch = LongOklch.map(value => parseFloat(value.toFixed(4)));
    return `--color-${colorName}-${shade}: oklch(${oklch[0]} ${oklch[1]} ${oklch[2]});`;
  }

  private generateOldTailwindConfig(colorPalette: ColorPalette): void {}

  private toCamelCase(str: string) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }
}
