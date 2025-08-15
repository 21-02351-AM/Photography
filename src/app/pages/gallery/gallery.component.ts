import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AlbumService } from '../../services/album.service';

interface Album {
  title: string;
  slug: string;
  cover: string;
  photos: string[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})

export class GalleryComponent {
  gallery: Album[] = [];


  constructor(private router: Router, private albumService: AlbumService) {
    this.gallery = this.albumService.getAllAlbums();
  }

  openAlbum(album: any) {
    this.router.navigate(['/album', album.slug]);
  }
}
