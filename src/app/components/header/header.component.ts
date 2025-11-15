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

  // ✅ Toggle mobile menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // ✅ Scroll or Redirect based on current page
  scrollToSection(id: string) {
    // Scroll to element first
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Close mobile menu after short delay
    if (this.menuOpen) {
      setTimeout(() => {
        this.menuOpen = false;
      }, 200); // 200ms delay ensures scroll executes first
    }

    // Redirect if not on homepage
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + id;
    }
  }

  // ✅ Scroll to contact section
  scrollToContact() {
    this.scrollToSection('contact');
  }

  // ✅ Go to homepage when clicking logo
  goHome() {
    window.location.href = '/';
  }
}
