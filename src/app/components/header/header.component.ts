import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  // Toggle mobile menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Scroll to any section by ID (mobile-friendly)
  scrollToSection(id: string) {
    this.menuOpen = false; // 1️⃣ Close mobile menu first
    setTimeout(() => {      // 2️⃣ Wait a tiny moment for menu to close
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // 3️⃣ Smooth scroll
      }
    }, 100); // 100ms delay
  }

  // Scroll specifically to Contact section
  scrollToContact() {
    this.scrollToSection('contact');
  }
}
