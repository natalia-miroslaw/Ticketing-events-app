export interface EventType {
  id: number;
  title: string;
  date: number;
  organizer: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  localization: {
    place: string | 'online';
    address?: string;
    position?: {
      lat?: number;
      lon?: number;
    }
  };
  photoUrl?: string;
}
