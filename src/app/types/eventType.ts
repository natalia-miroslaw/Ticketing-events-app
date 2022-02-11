export interface EventType {
  id: number;
  title: string;
  date: number;
  organizer: string;
  description: string;
  price: number;
  category: string;
  localization: {
    place: string | 'online';
    address?: string;
    lat?: number;
    long?: number;
  };
  photoUrl?: string;
}
