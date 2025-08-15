import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAtTop = true;
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isAtTop = window.scrollY === 0;
  }
  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  scrolltoHome() {
    const currentUrl = this.router.url;
    if (currentUrl !== '/') {
      // Go to homepage first
      this.router.navigateByUrl('/').then(() => {
        // Wait for the view to update, then scroll
        setTimeout(() => {
          const el = document.getElementById('home');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50); // Small delay to ensure the DOM is ready
      });
    } else {
      // Already at home
      const el = document.getElementById('home');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
