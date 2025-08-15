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
      cover:
        'https://plus.unsplash.com/premium_photo-1679656159946-f62c9f79f92d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlfGVufDB8fDB8fHww',
      photos: [
        'https://plus.unsplash.com/premium_photo-1710695568547-55afb2b5a1fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXRzfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1710548650774-e37b948f97a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXRzfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1710695570402-83df3571880b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1531369201-4f7be267b1de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1619264437738-0c22e4d22f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBjaGluZXNlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1659541869669-97012d7e66fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBjaGluZXNlfGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1661918391309-7ddd44addee6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBjaGluZXNlfGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1740506842753-1e548c359d91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0JTIwY2hpbmVzZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1728546679568-5f5d7a3c1ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0JTIwY2hpbmVzZXxlbnwwfHwwfHx8MA%3D%3D',
        // ... more
      ],
    },
    {
      title: 'Events',
      slug: 'events',
      cover:
        'https://plus.unsplash.com/premium_photo-1664278686569-e2045aa5b11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFydHl8ZW58MHwxfDB8fHww',
      photos: [
        'https://plus.unsplash.com/premium_photo-1664278686569-e2045aa5b11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFydHl8ZW58MHwxfDB8fHww',
        'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFydHl8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcnR5fGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcnR5fGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1734552047321-94c0650d1b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHl8ZW58MHwyfDB8fHww',
        'https://plus.unsplash.com/premium_photo-1681841200807-458beeca3d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1627020730793-2ccb5cd55e99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFydHl8ZW58MHwxfDB8fHww',
        'https://images.unsplash.com/photo-1627020730793-2ccb5cd55e99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFydHl8ZW58MHwxfDB8fHww',
        'https://images.unsplash.com/photo-1713450605268-5f8ba67f5b55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcnR5fGVufDB8MnwwfHx8MA%3D%3D',
        'https://media.istockphoto.com/id/2150389695/photo/concertgoer-forms-heart-shape-with-hands-at-beachside-music-festival-crowd-enjoys-live.webp?a=1&b=1&s=612x612&w=0&k=20&c=94ItQ9LNfLzEWpZjanwst8wgldIT-3nrZhQs7dmbNOk=',
        'https://images.unsplash.com/photo-1731596153338-dd52df3e63c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhcnR5fGVufDB8MnwwfHx8MA%3D%3D',
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
