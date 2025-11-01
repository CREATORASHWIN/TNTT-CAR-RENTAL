import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Standalone components
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component'; // ✅ added
import { CarGridComponent } from './components/car-grid/car-grid.component';
import { HowToBookComponent } from './components/how-to-book/how-to-book.component';
// import { FaqComponent } from './components/faq/faq.component';
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
    AboutComponent,        // ✅ included here
    CarGridComponent,
    HowToBookComponent,
    ReviewsComponent,
    FooterComponent,
    ContactComponent,
    FloatingContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}