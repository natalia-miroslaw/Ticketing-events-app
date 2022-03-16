import { EventType } from '../../types/eventType';

export const DUMMY_DATA: EventType[] = [
  {
    id: 1,
    title: 'Sean Paul live Concert',
    date: new Date(2022, 10, 23),
    organizer: 'Natalia Mirosław',
    description: 'Come see the Sean Paul concert!',
    price: 50.0,
    category: 'Online Events',
    tags: [
      'online',
      'event',
      'Sean Paul',
      'concert',
      'reggae',
      'dancehall',
      'live',
      'tickets'
    ],
    localization: {
      place: 'online'
    },
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QzkJ305hJF1SnXBT4RlK3QHaEd%26pid%3DApi&f=1'
  },
  {
    id: 2,
    title: 'Dancehall with Jasmin Halper',
    date: new Date(2022, 10, 24),
    organizer: 'Natalia Mirosław',
    description:
      'Dancehall workshops with Jasmin from Xclusiv Dancers in Gdańsk!',
    price: 80.0,
    category: 'Dancing Workshops',
    tags: [
      'workshops',
      'dancehall',
      'Jasmin Halper',
      'Gdańsk',
      'dancing',
      'event',
      'tickets'
    ],
    localization: {
      place: 'Toruń',
      address: 'Dom Kultury, ul. Szeroka 10'
    },
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wcjVQ_DdUiiAymfmPeRX6wHaHa%26pid%3DApi&f=1'
  },
  {
    id: 3,
    title: 'Sunrise Festival 2022',
    date: new Date(2022, 10, 10),
    organizer: 'Natalia Mirosław',
    description: 'Check out the artists performing at the festival!',
    price: 350.0,
    category: 'Concerts',
    tags: [
      'Sunrise',
      'Festival',
      'concert',
      'Kołobrzeg',
      'summer',
      'tickets',
      'club music',
      'techno',
      'house'
    ],
    localization: {
      place: 'Kołobrzeg',
      address: 'Podczele Airport'
    },
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Bv4sAU3NeEp3jJ7QbDQHxgHaE8%26pid%3DApi&f=1'
  },
  {
    id: 4,
    title: 'Stretching Online',
    date: new Date(2022, 10, 13),
    organizer: 'Natalia Mirosław',
    description: '1.5h stretching class online for beginners',
    price: 20.0,
    category: 'Online Events',
    tags: ['stretching', 'online', 'event', 'class', 'tickets', 'beginner'],
    localization: {
      place: 'online'
    },
    photoUrl: 'https://i.ytimg.com/vi/E52umQqC1hA/maxresdefault.jpg'
  },
  {
    id: 5,
    title: 'Hip-Hop Workshops in Vienna',
    date: new Date(2022, 10, 12),
    organizer: 'Natalia Mirosław',
    description: 'Buy ticket for Hip-Hop workshops with Mario & Luigi',
    price: 140.0,
    category: 'Dancing Workshops',
    tags: [
      'dancing',
      'event',
      'class',
      'tickets',
      'Mario',
      'Luigi',
      'hip-hop',
      'workshops'
    ],
    localization: {
      place: 'Vienna',
      address: 'Vienna Dance School, Sunny Street 12'
    },
    photoUrl:
      'https://www.freestyledancepa.com/wp-content/uploads/2012/08/IMG_0216.jpg'
  },
  {
    id: 6,
    title: 'Damian Marley Concert',
    date: new Date(2022, 10, 16),
    organizer: 'Natalia Mirosław',
    description: 'Damian Marley live concert in Wrocław!',
    price: 100.0,
    category: 'Concerts',
    tags: [
      'Damian Marley',
      'concert',
      'Wrocław',
      'summer',
      'tickets',
      'reggae music',
      'dancehall',
      'live'
    ],
    localization: {
      place: 'Wrocław',
      address: 'Tarczyński Arena Wrocław, Al. Śląska 1'
    },
    photoUrl:
      'https://i1.wp.com/www.worldareggae.com/wp-content/uploads/2019/06/Damian-Marley-Woodstock-2019-3228-2.jpg?fit=1080%2C720&ssl=1'
  }
];

// export const categories = [
//   {
//     name: 'Concerts',
//     subcategories: [
//       'Rock',
//       'Reggae',
//       'Pop',
//       'Electronic',
//       'Dancehall',
//       'Hip-hop',
//       'Folk',
//       'Latin'
//     ]
//   },
//   {
//     name: 'Dancing Workshops',
//     subcategories: ['Dancehall', 'Hip-hop', 'Afro', 'Salsa', 'Twerk']
//   },
//   { name: 'Online Events' }
// ];
