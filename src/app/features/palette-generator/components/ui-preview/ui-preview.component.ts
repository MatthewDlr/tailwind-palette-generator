import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { ColorPalette } from "../../types/ColorPalette.type";

@Component({
  selector: "app-ui-preview",
  imports: [CommonModule],
  templateUrl: "./ui-preview.component.html",
  styleUrl: "./ui-preview.component.scss",
})
export class UiPreviewComponent {
  public colorPalette = input.required<ColorPalette>();
  protected toggleState = false;
}
