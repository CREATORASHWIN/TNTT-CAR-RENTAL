import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ensure this path is correct
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes'; // Your routes file

bootstrapApplication(AppComponent, {
  providers: [
    // Import browser animations module to enable Angular animations
    importProvidersFrom(BrowserAnimationsModule),

    // Provide application routing
    provideRouter(routes)
  ]
}).catch(err => console.error('Bootstrap failed:', err));