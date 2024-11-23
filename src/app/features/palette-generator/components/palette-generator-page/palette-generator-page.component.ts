import { Component } from "@angular/core";
import { ColorBarComponent } from "../color-bar/color-bar.component";

@Component({
  selector: "app-palette-generator-page",
  imports: [ColorBarComponent],
  templateUrl: "./palette-generator-page.component.html",
  styleUrl: "./palette-generator-page.component.scss",
})
export class PaletteGeneratorPageComponent {}
