import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideClientHydration, withIncrementalHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideHighlightOptions } from "ngx-highlightjs";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withIncrementalHydration()),
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
