import { Component, inject, input, linkedSignal, output, signal } from "@angular/core";
import { HighlightAuto } from "ngx-highlightjs";
import { HighlightLineNumbers } from "ngx-highlightjs/line-numbers";
import { CodeExportService } from "../../services/code-export/code-export.service";
import { ColorPalette } from "../../types/ColorPalette.type";
import { ExportCodeType } from "../../types/ExportCodeType.type";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-code-export-bloc",
  imports: [CommonModule, HighlightAuto, HighlightLineNumbers],
  templateUrl: "./code-export-bloc.component.html",
  styleUrl: "./code-export-bloc.component.scss",
})
export class CodeExportBlocComponent {
  private codeExportService: CodeExportService = inject(CodeExportService);
  public codeType = signal<ExportCodeType>("TAILWIND4");
  public colorPalette = input.required<ColorPalette>();
  public code = linkedSignal(() => this.codeExportService.generateCodeFromPalette(this.colorPalette(), this.codeType()));
  public closePopup = output();
}
