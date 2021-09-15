import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoktContextProviderService {
  private roktLoaded;
  constructor() {
    this.roktLoaded = new Promise((resolve) => {
      var windowRef = window;
      var tagId = '2939646200598515208_a5f3983416194c6bb4445262a84b76c8';
      var sandbox = true;

      (windowRef as any)._ROKT_ = 'rokt';
      (windowRef as any).rokt = {
        id: tagId,
        lc: [
          // Once loaded, don't select Rokt placements immediately
          (rokt) =>
            rokt.init({
              skipInitialSelection: true,
              sandbox,
            }),
          // Resolve the Rokt instance
          (rokt) => resolve(rokt),
        ],
        it: new Date(),
      };
      // Create and load a script tag that contains the Rokt bootstrapper
      const target = windowRef.document.head || windowRef.document.body;
      const script = windowRef.document.createElement('script');
      script.type = 'text/javascript';
      // script.src = 'https://apps.rokt.com/wsdk/integrations/snippet.js';
      script.src = 'https://wsdk.stage.rokt.com/integrations/snippet.js';
      // script.crossOrigin = "anonymous";
      script.async = true;

      target.appendChild(script);
    });
  }

  setAttributes(attributes) {
    this.roktLoaded.then((rokt) => {
      rokt.setAttributes(attributes);
    });
  }

  triggerPageChange(pageIdentifier) {
    this.roktLoaded.then((rokt) => {
      rokt.triggerPageChange({
        pageIdentifier,
      });
    });
  }

  closeAll() {
    this.roktLoaded.then((rokt) => {
      rokt.closeAll();
    });
  }
}
