import api from './api.services';

import { RestaurantInterface } from '../interfaces/restaurant.interfaces';

export async function fetchRestaurants(
  params: Object = {},
): Promise<RestaurantInterface[]> {
  try {
    const response = await api.get<RestaurantInterface[]>(`/restaurants`, {
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error('Faleid fetch restauranst from api.');
  }
}
