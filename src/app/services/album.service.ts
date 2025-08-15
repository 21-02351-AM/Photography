import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private albums = [
    {
      title: 'Weddings',
      slug: 'weddings',
      cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      photos: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        'https://images.unsplash.com/photo-1495562569060-2eec283d3391',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        'https://images.unsplash.com/photo-1495562569060-2eec283d3391',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        // ... more
      ],
    },
    {
      title: 'Portraits',
      slug: 'portraits',
      cover: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      photos: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        'https://images.unsplash.com/photo-1495562569060-2eec283d3391',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        // ... more
      ],
    },
    {
      title: 'Landscapes',
      slug: 'landscapes',
      cover: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      photos: [
        'https://images.unsplash.com/photo-1495562569060-2eec283d3391',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        'https://images.unsplash.com/photo-1495562569060-2eec283d3391',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        // ... more
      ],
    },
    {
      title: 'Tours',
      slug: 'tours',
      cover: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      photos: [
        'https://images.unsplash.com/photo-1495562569060-2eec283d3391',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        'https://images.unsplash.com/photo-1495562569060-2eec283d3391',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759',
        // ... more
      ],
    },
  ];

  getAllAlbums() {
    return this.albums;
  }

  getAlbumBySlug(slug: string) {
    return this.albums.find(album => album.slug === slug);
  }
}
