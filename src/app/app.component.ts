import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  template: `
   <app-header />
    <router-outlet></router-outlet>
    <app-footer/>
  `
})
export class AppComponent {
  title = 'vh-movies';
}
