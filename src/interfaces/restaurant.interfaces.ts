export interface RestaurantInterface {
  name: string;
  address: string;
  hours: {
    from: string;
    to: string;
    days: Array<number>;
  };
  image: string;
}
