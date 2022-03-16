export interface EventType {
  id: number;
  title: string;
  date: Date;
  organizer: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  localization: {
    place: string | 'online';
    address?: string;
    lat?: number;
    long?: number;
  };
  photoUrl?: string;
}
