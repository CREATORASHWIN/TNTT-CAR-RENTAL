import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Standalone components
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { HowToBookComponent } from './components/how-to-book/how-to-book.component';
import { ReviewsComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { FloatingContactComponent } from './components/floating-contact/floating-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    HowToBookComponent,
    ReviewsComponent,
    FooterComponent,
    ContactComponent,
    FloatingContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHomePage = false;

  constructor(private router: Router) {
    // ✅ Detect current route and show homepage sections only on '/'
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage = event.urlAfterRedirects === '/';
      });
  }
}