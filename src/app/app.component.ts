import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

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

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {

        const currentUrl = event.urlAfterRedirects;
        this.isHomePage = currentUrl === '/' || currentUrl === '';

        this.updateSEO(currentUrl);
      });
  }

  private updateSEO(url: string): void {

    const baseUrl = 'https://tnttcarrental.com';

    // ===============================
    // HOME PAGE SEO (UAE + Tamilnadu Branding)
    // ===============================
    if (url === '/' || url === '') {

      this.titleService.setTitle(
        'TNTT Car Rental UAE | Tamilnadu Travel and Tourism Car Rental Services'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'TNTT Car Rental provides affordable daily, weekly and monthly car rental services across UAE including Dubai, Sharjah and Abu Dhabi. Operated under Tamilnadu Travel and Tourism.'
      });

    }

    // ===============================
    // CONTACT PAGE
    // ===============================
    else if (url.includes('contact')) {

      this.titleService.setTitle(
        'Contact TNTT Car Rental UAE | Tamilnadu Travel and Tourism'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'Contact TNTT Car Rental for fast booking support across UAE. A trusted service from Tamilnadu Travel and Tourism.'
      });

    }

    // ===============================
    // DEFAULT PAGE
    // ===============================
    else {

      this.titleService.setTitle(
        'TNTT Car Rental UAE | Affordable Car Rental Services'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'Reliable and affordable car rental services across UAE. Book now with TNTT Car Rental powered by Tamilnadu Travel and Tourism.'
      });
    }

    // ===============================
    // GLOBAL META TAGS
    // ===============================

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'car rental UAE, Dubai car rental, Sharjah car rental, Abu Dhabi car rental, monthly car rental UAE, Tamilnadu car rental, Tamilnadu travel and tourism, TNTT car rental'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: this.titleService.getTitle()
    });

    this.metaService.updateTag({
      property: 'og:description',
      content:
        this.metaService.getTag("name='description'")?.content || ''
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: baseUrl + url
    });

    // Canonical URL
    this.setCanonicalURL(baseUrl + url);
  }

  private setCanonicalURL(url: string): void {

    let link: HTMLLinkElement | null =
      document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}