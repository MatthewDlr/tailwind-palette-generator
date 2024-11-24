export interface ColorPalette {
  mainColor: string;
  colorName: string;
  colors: PaletteColor[];
}

export interface PaletteColor {
  hexCode: string;
  shade: number;
}
