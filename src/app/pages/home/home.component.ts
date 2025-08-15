import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  images = [
    {
      url: 'https://i.pinimg.com/1200x/8b/39/4b/8b394b421d0c6b462905a0e6546807eb.jpg',
      title: 'Featured Photo 1',
      description: 'A soft beam of light painting a peaceful moment.',
    },
    {
      url: 'https://i.pinimg.com/736x/a9/d1/cb/a9d1cb4224f8eb5af5153155efb5f987.jpg',
      title: 'Featured Photo 2',
      description: 'Capturing emotions through lens and light.',
    },
    {
      url: 'https://i.pinimg.com/736x/1c/43/e8/1c43e81caf3cd492e9d2516e2dc93e5b.jpg',
      title: 'Featured Photo 3',
      description: 'Moments that speak louder than words.',
    },
  ];
  qoutes = [
    {
      text: 'Photography is the story I fail to put into words Every picture tells a story, and every story deserves to be told. In every photograph, there is a moment that will never come again.',
      year: '2025',
    },
  ];
  learn_more = [
    {
      image_url:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
      title: 'About me',
    },
    {
      image_url:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1470&q=80',
      title: 'Portfolio',
    },
    {
      image_url:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
      title: 'Work with me',
    },
  ];

  currentIndex = 0;
  autoplayInterval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.autoplayInterval);
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextImage();
    }, 5000); // Change image every 5 seconds
  }

  get nextIndex() {
    return (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
