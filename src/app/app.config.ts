import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
// import { IssuesEffects } from './store/issues.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(routes),
    // provideStore(), 
    // provideEffects(IssuesEffects)
  ]
};
