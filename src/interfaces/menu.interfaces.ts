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
  sales?: Sale[];
}

export interface Sale {
  description: string;
  price: number;
  hours: Hours[];
  isOpen: boolean;
}

interface Hours {
  from: string;
  to: string;
  days: number[];
}
