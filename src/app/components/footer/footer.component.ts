import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  socials = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/alfred.miguel.0722',
      image:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/your_instagram',
      image:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Pinterest',
      url: 'https://www.pinterest.com/alfredlopez072202/_profile/',
      image:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amb-lopez7',
      image:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1470&q=80',
    },
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
