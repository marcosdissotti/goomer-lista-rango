export interface GroupMenuInterface {
  name: string;
  items: MenuInterface[];
}

export interface MenuInterface {
  restaurantId: number;
  name: string;
  image?: string;
  price?: number;
  group: string;
  sales?: Sales[];
  isOpen: boolean;
}

interface Hours {
  from: string;
  to: string;
  days: number[];
}

interface Sales {
  description: string;
  price: number;
  hours: Hours[];
}
