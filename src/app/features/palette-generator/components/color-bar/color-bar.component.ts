import { CommonModule } from "@angular/common";
import { Component, ElementRef, output, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms"; // Import FormsModule

@Component({
  selector: "app-color-bar",
  imports: [CommonModule, FormsModule],
  templateUrl: "./color-bar.component.html",
  styleUrl: "./color-bar.component.scss",
})
export class ColorBarComponent {
  public hexColor = output<string>();
  protected colorInput = "";
  @ViewChild("colorInputElement") colorInputElement!: ElementRef;

  constructor() {}

  protected onColorChange(newColor: string) {
    newColor = newColor.replaceAll(" ", "").replaceAll("#", "");
    newColor = newColor.slice(0, 6);
    this.colorInput = newColor;
    this.colorInputElement.nativeElement.value = newColor;

    if (this.isCorrectColor(newColor)) {
      this.hexColor.emit(newColor);
    }
  }

  private isCorrectColor(color: string): boolean {
    return /^#([0-9A-F]{3}){1,2}$/i.test(color);
  }
}
