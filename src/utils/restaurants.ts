import { RestaurantInterface } from '../interfaces/restaurant.interfaces';
import { checkIsOpen } from './hours';

export const checkIsOpenRestaurant = (restaurants: RestaurantInterface[]) => {
  return restaurants.map((restaurant) => ({
    ...restaurant,
    isOpen: checkIsOpen(restaurant),
  }));
};
