import { HttpClientModule } from '@angular/common/http';
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterOutlet } from '@angular/router';

import { routes } from './app-routes';

@Component({
  selector: 'toh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, RouterLink],

  standalone: true
})
export class AppComponent {
  title = 'toh';

  public static bootstrap() {
    bootstrapApplication(AppComponent, {
      providers: [
        provideRouter(routes),
        importProvidersFrom(HttpClientModule)
      ]
    });
  }
}
