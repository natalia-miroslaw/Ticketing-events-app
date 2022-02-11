import { EventType } from '../../types/eventType';

export const DUMMY_DATA: EventType[] = [
  {
    id: 1,
    title: 'Sean Paul Concert',
    date: 1644577846,
    organizer: 'Natalia Mirosław',
    description: 'Come see the Sean Paul concert!',
    price: 50.0,
    category: 'Online Events',
    localization: {
      place: 'online'
    },
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QzkJ305hJF1SnXBT4RlK3QHaEd%26pid%3DApi&f=1'
  },
  {
    id: 2,
    title: 'Dancehall with Jasmin Halper',
    date: 1644507846,
    organizer: 'Natalia Mirosław',
    description:
      'Dancehall workshops with Jasmin from Xclusiv Dancers in Gdańsk!',
    price: 80.0,
    category: 'Dancing Workshops',
    localization: {
      place: 'Dom Kultury',
      address: 'Toruń ul. Szeroka 10'
    },
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wcjVQ_DdUiiAymfmPeRX6wHaHa%26pid%3DApi&f=1'
  },
  {
    id: 3,
    title: 'Sunrise Festival 2022',
    date: 1644907846,
    organizer: 'Natalia Mirosław',
    description: 'Check out the artists performing at the festival!',
    price: 350.0,
    category: 'Concerts',
    localization: {
      place: 'Podczele Airport',
      address: 'Kołobrzeg'
    },
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Bv4sAU3NeEp3jJ7QbDQHxgHaE8%26pid%3DApi&f=1'
  }
];
