import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { MyPreset } from './mypreset';

export const appConfig: ApplicationConfig = {
  providers: [    
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration:'top'})), 
    provideClientHydration(),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: MyPreset,
            options: {
              darkModeSelector: false || 'none'
            },
        }
    })]
};


