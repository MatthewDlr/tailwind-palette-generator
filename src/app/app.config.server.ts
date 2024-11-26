import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideServerRendering } from "@angular/platform-server";
import { provideServerRoutesConfig } from "@angular/ssr";
import { appConfig } from "./app.config";
import { serverRoutes } from "./app.routes.server";
import { provideHighlightOptions } from "ngx-highlightjs";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
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

export const config = mergeApplicationConfig(appConfig, serverConfig);
