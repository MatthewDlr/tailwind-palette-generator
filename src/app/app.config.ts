import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { provideHighlightOptions } from "ngx-highlightjs";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHighlightOptions({
      coreLibraryLoader: () => import("highlight.js/lib/core"),
      lineNumbersLoader: () => import("ngx-highlightjs/line-numbers"),
      languages: {
        javascript: () => import("highlight.js/lib/languages/javascript"),
        css: () => import("highlight.js/lib/languages/css"),
      },
    }),
  ],
};
