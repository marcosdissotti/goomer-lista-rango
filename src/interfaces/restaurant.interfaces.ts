export interface RestaurantInterface {
  id?: number;
  name?: string;
  address?: string;
  hours?: {
    from: string;
    to: string;
    days: Array<number>;
  };
  image?: string;
}
