export interface MenuInterface {
  restaurantId: number;
  name: string;
  image: string;
  price: number;
  group: string;
  sales: Array<Sales>;
}

interface Hours {
  from: string;
  to: string;
  days: Array<number>;
}

interface Sales {
  description: string;
  price: number;
  hours: Array<Hours>;
}
