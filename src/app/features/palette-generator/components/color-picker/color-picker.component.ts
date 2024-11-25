import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, OnInit, output, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import chroma from "chroma-js";

@Component({
  selector: "app-color-picker",
  imports: [CommonModule, FormsModule],
  templateUrl: "./color-picker.component.html",
  styleUrl: "./color-picker.component.scss",
})
export class ColorPickerComponent implements OnInit {
  public hexColor = output<string>();
  protected colorInput = chroma.random().hex().slice(1);
  @ViewChild("colorInputElement") colorInputElement!: ElementRef;

  ngOnInit(): void {
    this.hexColor.emit(this.colorInput);
  }

  protected onColorChange(newColor: string) {
    newColor = newColor.replaceAll(" ", "").replaceAll("#", "").replaceAll("'", "").replaceAll('"', "");
    newColor = newColor.slice(0, 6);
    this.colorInput = newColor;
    this.colorInputElement.nativeElement.value = newColor;

    if (this.isCorrectColor(newColor)) {
      this.hexColor.emit(newColor);
    } else {
      this.hexColor.emit("");
    }
  }

  protected getRandomColor() {
    this.onColorChange(chroma.random().hex().slice(1));
  }

  protected onColorInputClick() {
    this.colorInputElement.nativeElement.select();
  }

  private isCorrectColor(color: string): boolean {
    if (color.length !== 6) {
      return false;
    }
    const isHexColor = /^[0-9A-F]{6}$/i.test(color);
    return isHexColor;
  }
}
