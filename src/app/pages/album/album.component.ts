import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albumTitle = '';
  photos: string[] = [];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = this.albumService.getAlbumBySlug(slug || '');
    if (found) {
      this.albumTitle = found.title;
      this.photos = found.photos;
    }
  }
}
