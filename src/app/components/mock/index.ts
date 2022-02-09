import { EventType } from '../../types/eventType';

export const DUMMY_DATA: EventType[] = [
  {
    title: 'Vybz Kartel Concert',
    date: 1644577846,
    organizer: 'Natalia Mirosław',
    description: 'Come see the Vybz Kartel koncert!',
    price: 50.0,
    category: 'Online Events',
    localization: {
      place: 'online'
    }
  },
  {
    title: 'Dancehall with Jasmin Halper',
    date: 1644507846,
    organizer: 'Natalia Mirosław',
    description:
      'Dancehall workshops with Jasmin from Xclusiv Dancers in Toruń!',
    price: 80.0,
    category: 'Dancing Workshops',
    localization: {
      place: 'Dom Kultury',
      address: 'Toruń ul. Szeroka 10'
    }
  },
  {
    title: 'Sunrise Festival 2022',
    date: 1644907846,
    organizer: 'Natalia Mirosław',
    description: 'Sprawdź artystów występujących na festiwalu!',
    price: 350.0,
    category: 'Concerts',
    localization: {
      place: 'Lotnisko Podczele',
      address: 'Kołobrzeg'
    }
  }
];
