import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  section1 = [
    // EVENT PACKAGES
    // These are the event packages that will be displayed in the first section
    {
      url: 'https://plus.unsplash.com/premium_photo-1678654259660-bf70cad2405c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Basic Event',
      description: 'Perfect for quick sessions and casual shoots.',
    },
    {
      url: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Standard Event',
      description: 'Includes multiple locations and outfit changes.',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1678654259660-bf70cad2405c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Basic Event',
      description: 'Perfect for quick sessions and casual shoots.',
    },
  ];

  eventPackages = [
    {
      title: 'Basic Event',
      price: '₱7,000',
      features: ['2 hours coverage', '20 edited photos', 'Online gallery'],
    },
    {
      title: 'Standard Event',
      price: '₱12,000',
      features: ['4 hours coverage', '40 edited photos', 'Same-day preview'],
    },
    {
      title: 'Full Day',
      price: '₱18,000',
      features: ['8 hours coverage', 'Full edits', 'Highlight reel (optional)'],
    },
  ];

  // WEDDING PACKAGES
  // These are the wedding packages that will be displayed in the second section

  section2 = [
    {
      url: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Pre-Wedding Shoot',
      description: 'Includes multiple locations and outfit changes.',
    },
    {
      url: 'https://source.unsplash.com/random/800x602?event2',
      title: 'Intimate Wedding',
      description: 'Ideal for weddings and full-day coverage.',
    },
    {
      url: 'https://source.unsplash.com/random/800x603?event2',
      title: 'Full Wedding Coverage',
      description: 'All-in-one package with prints and albums.',
    },
  ];

  weddingPackages = [
    {
      title: 'Pre-Wedding Session',
      price: '₱10,000',
      features: ['2 hours coverage', '30 edited photos', 'Online gallery'],
    },
    {
      title: 'Intimate Wedding',
      price: '₱25,000',
      features: [
        '6 hours coverage',
        '50+ edited photos',
        'Highlight slideshow',
      ],
    },
    {
      title: 'Full Wedding Coverage',
      price: '₱40,000',
      features: [
        '12 hours coverage',
        'Full gallery (100+)',
        'Engagement session included',
      ],
    },
  ];

  // PORTRAIT PACKAGES
  // These are the portrait packages that will be displayed in the third section

  section3 = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1678654259660-bf70cad2405c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mini Session',
      description: 'Perfect for quick sessions and casual shoots.',
    },
    {
      url: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Standard Portrait',
      description: 'Includes multiple locations and outfit changes.',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1678654259660-bf70cad2405c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Creative Portrait',
      description: 'Perfect for quick sessions and casual shoots.',
    },
  ];

  portraitPackages = [
    {
      title: 'Solo Portrait',
      price: '₱5,000',
      features: [
        '1 hour session',
        '15 edited photos',
        'Studio or outdoor shoot',
      ],
    },
    {
      title: 'Couple Portrait',
      price: '₱8,000',
      features: [
        '2 hours session',
        '30 edited photos',
        '2 outfits, 1 location',
      ],
    },
    {
      title: 'Creative Portrait',
      price: '₱12,000',
      features: [
        '3 hours session',
        'Full creative direction',
        'Unlimited outfit changes',
      ],
    },
  ];

  currentIndex1 = 0;
  currentIndex2 = 0;
  currentIndex3 = 0;

  isAnimating = false;

  // Section 1
  // These methods handle the image navigation for the first section
  prevImage1() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex1 =
      (this.currentIndex1 - 1 + this.section1.length) % this.section1.length;
    setTimeout(() => (this.isAnimating = false), 700);
  }

  nextImage1() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex1 = (this.currentIndex1 + 1) % this.section1.length;
    setTimeout(() => (this.isAnimating = false), 700);
  }

  // Section 2
  // These methods handle the image navigation for the second section
  prevImage2() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex2 =
      (this.currentIndex2 - 1 + this.section2.length) % this.section2.length;
    setTimeout(() => (this.isAnimating = false), 700);
  }

  nextImage2() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex2 = (this.currentIndex2 + 1) % this.section2.length;
    setTimeout(() => (this.isAnimating = false), 700);
  }

  // Section 3
  // These methods handle the image navigation for the third section
  prevImage3() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex3 =
      (this.currentIndex3 - 1 + this.section3.length) % this.section3.length;
    setTimeout(() => (this.isAnimating = false), 700);
  }

  nextImage3() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex3 = (this.currentIndex3 + 1) % this.section3.length;
    setTimeout(() => (this.isAnimating = false), 700);
  }
}
