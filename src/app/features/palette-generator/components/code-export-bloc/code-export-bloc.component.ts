import { Component, inject, input, linkedSignal } from "@angular/core";
import { HighlightAuto } from "ngx-highlightjs";
import { HighlightLineNumbers } from "ngx-highlightjs/line-numbers";
import { CodeExportService } from "../../services/code-export/code-export.service";
import { ColorPalette } from "../../types/ColorPalette.type";

@Component({
  selector: "app-code-export-bloc",
  imports: [HighlightAuto, HighlightLineNumbers],
  templateUrl: "./code-export-bloc.component.html",
  styleUrl: "./code-export-bloc.component.scss",
})
export class CodeExportBlocComponent {
  private codeExportService: CodeExportService = inject(CodeExportService);
  public colorPalette = input.required<ColorPalette>();
  public code = linkedSignal(() => this.codeExportService.generateCodeFromPalette(this.colorPalette(), "4.x"));
}
