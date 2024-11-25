import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, inject, input, linkedSignal, output, signal, ViewChild } from "@angular/core";
import { HighlightAuto } from "ngx-highlightjs";
import { HighlightLineNumbers } from "ngx-highlightjs/line-numbers";
import { CodeExportService } from "../../services/code-export/code-export.service";
import { ColorPalette } from "../../types/ColorPalette.type";
import { ExportCodeType } from "../../types/ExportCodeType.type";

@Component({
  selector: "app-code-export-bloc",
  imports: [CommonModule, HighlightAuto, HighlightLineNumbers],
  templateUrl: "./code-export-bloc.component.html",
  styleUrl: "./code-export-bloc.component.scss",
})
export class CodeExportBlocComponent {
  @ViewChild("popup") popup!: ElementRef;
  private codeExportService: CodeExportService = inject(CodeExportService);
  public codeType = signal<ExportCodeType>("TAILWIND4");
  public colorPalette = input.required<ColorPalette>();
  public code = linkedSignal(() => this.codeExportService.generateCodeFromPalette(this.colorPalette(), this.codeType()));
  public closePopup = output();


  @HostListener("document:keydown.escape", ["$event"])
  onKeydownHandlerEscape() {
    this.closePopup.emit();
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    if (this.popup && !this.popup.nativeElement.contains(event.target)) {
      this.closePopup.emit();
    }
  }

  protected copyCodeToClipboard() {
    navigator.clipboard.writeText(this.code());
  }
}
