import { Injectable } from "@angular/core";
import chroma from "chroma-js";
import { ColorPalette } from "../../types/ColorPalette.type";
import { ExportCodeType } from "../../types/ExportCodeType.type";

@Injectable({
  providedIn: "root",
})
export class CodeExportService {
  public generateCodeFromPalette(colorPalette: ColorPalette, codeType: ExportCodeType): string {
    const palette = { ...colorPalette };
    palette.colorName = this.toCamelCase(palette.colorName);

    if (codeType === "TAILWIND4") {
      return this.generateNewTailwindConfig(palette);
    } else if (codeType === "TAILWIND3") {
      return this.generateOldTailwindConfig(palette);
    } else {
      return "";
    }
  }

  private generateNewTailwindConfig(colorPalette: ColorPalette): string {
    const colorName = colorPalette.colorName;
    return `@theme {
${colorPalette.colors.map(color => "    " + this.generateNewTailwindColor(colorName, color.hexCode, color.shade)).join("\n")}
  }`;
  }

  private generateNewTailwindColor(colorName: string, color: string, shade: number): string {
    const [l, c, h] = chroma(color).oklch();
    const safeC = isNaN(c) ? 0 : c;
    const safeH = isNaN(h) ? 0 : h;
    return `--color-${colorName}-${shade}: oklch(${l.toFixed(4)} ${safeC.toFixed(4)} ${safeH.toFixed(4)});`;
  }

  private generateOldTailwindConfig(colorPalette: ColorPalette): string {
    return `${colorPalette.colorName} {
${colorPalette.colors.map(color => "  " + this.generateOldTailwindColor(color.hexCode, color.shade)).join("\n")}
}`;
  }

  private generateOldTailwindColor(color: string, shade: number): string {
    return `${shade}: "${color}",`;
  }

  private toCamelCase(str: string) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }
}
