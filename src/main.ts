import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // make sure the path is correct
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes'; // your routes file

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule), // enable animations
    provideRouter(routes) // enable routing
  ]
}).catch(err => console.error(err));
