import { Routes } from "@angular/router";
import { PaletteGeneratorPageComponent } from "./features/palette-generator/components/palette-generator-page/palette-generator-page.component";

export const routes: Routes = [{ path: "**", component: PaletteGeneratorPageComponent }];
