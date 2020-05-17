import { restaurantsRepository } from '../repositories';
import { checkIsOpenRestaurant } from '../utils/restaurants';

import { RestaurantInterface } from '../interfaces/restaurant.interfaces';

export async function fetchRestaurants(
  search?: string,
): Promise<RestaurantInterface[]> {
  try {
    const restaurants = await restaurantsRepository.getRestaurants(search);
    // const restaurants = data;

    return checkIsOpenRestaurant(restaurants);
  } catch (error) {
    console.error(error);
    throw new Error('Faleid fetch restaurants from services.');
  }
}
