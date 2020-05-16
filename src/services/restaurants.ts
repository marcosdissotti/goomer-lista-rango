import { restaurantsRepository } from '../repositories';

import { RestaurantInterface } from '../interfaces/restaurant.interfaces';

export async function fetchRestaurants(
  search?: string,
): Promise<RestaurantInterface[]> {
  try {
    const restaurants = await restaurantsRepository.getRestaurants(search);

    return restaurants;
  } catch (error) {
    console.error(error);
    throw new Error('Faleid fetch restaurants from services.');
  }
}
