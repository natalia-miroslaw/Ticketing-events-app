import { EventType } from '../../types/eventType';

export const DUMMY_DATA: EventType[] = [
  {
    id: 1,
    title: 'Sean Paul live Concert',
    date: 1666555200000, //23-10-2022 20:00
    organizer: 'Natalia Mirosław',
    description: 'Come see the Sean Paul concert!',
    price: 50.0,
    category: 'Online Events',
    tags: ['Sean Paul', 'Concert', 'Reggae', 'Dancehall', 'Online', 'Live'],
    localization: {
      place: 'online'
    },
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QzkJ305hJF1SnXBT4RlK3QHaEd%26pid%3DApi&f=1'
  },
  {
    id: 2,
    title: 'Dancehall with Jasmin Halper',
    date: 1666620000000, //24-10-2022 14:00
    organizer: 'Natalia Mirosław',
    description:
      'Dancehall workshops with Jasmin from Xclusiv Dancers in Gdańsk!',
    price: 80.0,
    category: 'Dancing Workshops',
    tags: [
      'Workshops',
      'Dancehall',
      'Jasmin Halper',
      'Gdańsk',
      'Classes',
      'Beginner level',
      'Intermediate level'
    ],
    localization: {
      place: 'Toruń',
      address: 'Dom Kultury, ul. Szeroka 10',
      position: {
        lon: 18.608817756573725,
        lat: 53.01155932408432
      }
    },
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wcjVQ_DdUiiAymfmPeRX6wHaHa%26pid%3DApi&f=1'
  },
  {
    id: 3,
    title: 'Sunrise Festival 2022',
    date: 1660143600000, //24-08-2022 15:00
    organizer: 'Natalia Mirosław',
    description: 'Check out the artists performing at the festival!',
    price: 350.0,
    category: 'Concerts',
    tags: [
      'Sunrise Festival',
      'Kołobrzeg',
      'Summer',
      'Club music',
      'Techno',
      'House'
    ],
    localization: {
      place: 'Kołobrzeg',
      address: 'Podczele Airport',
      position: {
        lon: 15.672181601120807,
        lat: 54.19605484676229
      }
    },
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Bv4sAU3NeEp3jJ7QbDQHxgHaE8%26pid%3DApi&f=1'
  },
  {
    id: 4,
    title: 'Stretching Online',
    date: 1665680400000, //13-10-2022 17:00
    organizer: 'Natalia Mirosław',
    description: '1.5h stretching class online for beginners',
    price: 20.0,
    category: 'Online Events',
    tags: ['Stretching', 'Online', 'Classes', 'Beginner level'],
    localization: {
      place: 'online'
    },
    photoUrl: 'https://i.ytimg.com/vi/E52umQqC1hA/maxresdefault.jpg'
  },
  {
    id: 5,
    title: 'Hip-Hop Workshops in Poznań',
    date: 1655038800000, //12-06-2022 13:00
    organizer: 'Natalia Mirosław',
    description: 'Buy ticket for Hip-Hop workshops with Mario & Luigi',
    price: 140.0,
    category: 'Dancing Workshops',
    tags: [
      'Classes',
      'Poznań',
      'Mario',
      'Luigi',
      'Hip-hop',
      'Workshops',
      'Beginner level',
      'Intermediate level'
    ],
    localization: {
      place: 'Poznań',
      address: 'RITMO Dance Studio, Maltańska 1',
      position: {
        lon: 16.959082878308052,
        lat: 52.40398415259607
      }
    },
    photoUrl:
      'https://www.freestyledancepa.com/wp-content/uploads/2012/08/IMG_0216.jpg'
  },
  {
    id: 6,
    title: 'Damian Marley Concert',
    date: 1657998000000, //16-07-2022 19:00
    organizer: 'Natalia Mirosław',
    description: 'Damian Marley live concert in Wrocław!',
    price: 100.0,
    category: 'Concerts',
    tags: [
      'Damian Marley',
      'Concert',
      'Wrocław',
      'Summer',
      'Reggae',
      'Dancehall'
    ],
    localization: {
      place: 'Wrocław',
      address: 'Tarczyński Arena Wrocław, Al. Śląska 1',
      position: {
        lon: 16.9437849134762,
        lat: 51.14129482462953
      }
    },
    photoUrl:
      'https://i1.wp.com/www.worldareggae.com/wp-content/uploads/2019/06/Damian-Marley-Woodstock-2019-3228-2.jpg?fit=1080%2C720&ssl=1'
  },
  {
    id: 7,
    title: 'Alicia Keys',
    date: 1657918800000, //15-07-2022 21:00
    organizer: 'Natalia Mirosław',
    description: 'Alicia Keys is coming to Poland to have a concert in Cracow!',
    price: 170.0,
    category: 'Concerts',
    tags: ['Alicia Keys', 'Concert', 'R&B', 'Kraków'],
    localization: {
      place: 'Kraków',
      address: 'TAURON Arena Kraków, ul. Stanisława Lema 7',
      position: {
        lon: 19.99141355541286,
        lat: 50.067797319088925
      }
    },
    photoUrl:
      'https://www.swashvillage.org/storage/img/images_1/alicia-keys-biography.jpg'
  },
  {
    id: 8,
    title: 'Eagles of Death Metal: The World Tour',
    date: 1685563200000, //31-05-2023 20:00
    organizer: 'Natalia Mirosław',
    description:
      'Eagles of Death Metal are extending The World Tour and are coming to Poland soon!',
    price: 120.0,
    category: 'Concerts',
    tags: [
      'Eagles of Death Metal',
      'Concert',
      'Heavy metal',
      'Rock',
      'Warszawa'
    ],
    localization: {
      place: 'Warszawa',
      address: 'PGE Narodowy Warszawa, ul. Poniatowskiego 1',
      position: {
        lon: 21.045758711334187,
        lat: 52.23962707824463
      }
    },
    photoUrl:
      'https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/event_header/28519'
  },
  {
    id: 9,
    title: 'Ed Scheeran Europe Tour',
    date: 1661889600000, //30-08-2022 20:00
    organizer: 'Natalia Mirosław',
    description: 'Ed Scheeran is coming to Europe to promote his new album!',
    price: 220.0,
    category: 'Concerts',
    tags: ['Ed Scheeran', 'Concert', 'Pop', 'Rock', 'Folk', 'Warszawa'],
    localization: {
      place: 'Warszawa',
      address: 'PGE Narodowy Warszawa, ul. Poniatowskiego 1',
      position: {
        lon: 21.045758711334187,
        lat: 52.23962707824463
      }
    },
    photoUrl:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F04%2F06%2FGettyImages-1358334164.jpg'
  },
  {
    id: 10,
    title: 'Lost Frequencies',
    date: 1670004000000, //02-12-2022 18:00
    organizer: 'Natalia Mirosław',
    description: 'Lost Frequencies again in Warsaw!',
    price: 90.0,
    category: 'Concerts',
    tags: [
      'Lost Frequencies',
      'Concert',
      'Pop',
      'Electro',
      'House',
      'Warszawa'
    ],
    localization: {
      place: 'Warszawa',
      address: 'Klub Stodoła, ul. Batorego 10',
      position: {
        lon: 21.01028037085281,
        lat: 52.211712886806644
      }
    },
    photoUrl:
      'https://www.tekstowo.pl/zdjecie_wykonawcy,lost_frequencies,bG9zdF9mcmVxdWVuY2llc181X2E5NGU2NzQ5XzcwNjU4NQ.._1200_900_.jpg'
  },
  {
    id: 11,
    title: 'Salsa Workshops in Poznań',
    date: 1668009600000, //09-11-2022 16:00
    organizer: 'Natalia Mirosław',
    description: 'Salsa workshops for ladies with Silvia and Paul',
    price: 40.0,
    category: 'Dancing Workshops',
    tags: [
      'Classes',
      'Poznań',
      'Silvia and Paul',
      'Salsa',
      'Latino',
      'Workshops',
      'Beginner level',
      'Intermediate level'
    ],
    localization: {
      place: 'Poznań',
      address: 'Salsa Siempre Studio Dance, ul. Św. Marcina 24',
      position: {
        lon: 16.927796976407354,
        lat: 52.40944775405399
      }
    },
    photoUrl:
      'https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 12,
    title: 'High Heels Workshops',
    date: 1662721200000, //09-09-2022 11:00
    organizer: 'Natalia Mirosław',
    description: 'High Heels workshops in Gdańsk with Anna Studackeva',
    price: 45.0,
    category: 'Dancing Workshops',
    tags: [
      'Classes',
      'Gdańsk',
      'Anna Studackeva',
      'High heels',
      'Workshops',
      'Beginner level',
      'Intermediate level'
    ],
    localization: {
      place: 'Gdańsk',
      address: 'Studio Tańca Siemanko, ul. Kilińskiego 4 Galeria Metropolia',
      position: {
        lon: 18.605255028058366,
        lat: 54.38303209186031
      }
    },
    photoUrl:
      'https://images.pexels.com/photos/8098276/pexels-photo-8098276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];
