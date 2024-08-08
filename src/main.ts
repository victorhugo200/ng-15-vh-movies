
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.route';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES)]
});