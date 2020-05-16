import { restaurantsRepository } from '../repositories';

import { RestaurantInterface } from '../interfaces/restaurant.interfaces';

export async function fetchRestaurants(): Promise<RestaurantInterface[]> {
  try {
    const restaurants = await restaurantsRepository.getRestaurants();

    return restaurants;
  } catch (error) {
    console.error(error);
    throw new Error('Faleid fetch restaurants from services.');
  }
}
