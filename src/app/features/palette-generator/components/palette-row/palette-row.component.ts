import { CommonModule } from "@angular/common";
import { Component, effect, input, linkedSignal } from "@angular/core";
import { GetColorName } from "hex-color-to-color-name";


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
}
