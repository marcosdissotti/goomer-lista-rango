export interface RestaurantInterface {
  id?: number;
  name: string;
  address?: string;
  hours?: Hours[];
  image?: string;
  isOpen?: boolean | undefined;
}

export interface Hours {
  from: string;
  to: string;
  days: Array<number>;
}
