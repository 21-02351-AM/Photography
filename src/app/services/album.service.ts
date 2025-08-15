import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private albums = [
    {
      title: 'Weddings',
      slug: 'weddings',
      cover:
        'https://images.unsplash.com/photo-1705058642830-ccec83937fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdlZGRpbmclMjBtb21lbnRzfGVufDB8fDB8fHww',
      photos: [
        'https://unsplash.com/photos/two-gold-wedding-rings-on-a-white-background-WHUG4KXCbuI',
        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D,',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1649183424680-464747a8e43d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
        'https://media.istockphoto.com/id/2090025382/photo/the-man-gently-holds-the-brides-hand-with-a-beautiful-golden-wedding-ring-enlarged-image-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=CDv-ncVVW01pNdZwg-TdvOMIJYgdqu-nyyWniPdZTTY=',
        'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1673897847791-503a222307a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1504993945773-3f38e1b6a626?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1664530453131-ed0e68f9189c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1482482097755-0b595893ba63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
        'https://media.istockphoto.com/id/1399000012/photo/guests-throwing-confetti-over-bride-and-groom-as-they-walk-past-after-their-wedding-ceremony.jpg?s=2048x2048&w=is&k=20&c=G8zuGJUuEK9HXwx1xEYPYwrcajt8r3K8nSVFeEzLHFY=',
        'https://plus.unsplash.com/premium_photo-1661326257875-344979a1fe8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMG1vbWVudHN8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1690148812602-0a3aa99a8812?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBtb21lbnRzfGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1729621685968-e99a413f33df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmclMjBtb21lbnRzfGVufDB8fDB8fHww',

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
    return this.albums.find((album) => album.slug === slug);
  }
}
