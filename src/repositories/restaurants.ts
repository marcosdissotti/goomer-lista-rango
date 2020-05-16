import api from '../config/api';

import { RestaurantInterface } from '../interfaces/restaurant.interfaces';

export async function getRestaurants(
  search?: string,
): Promise<RestaurantInterface[]> {
  try {
    const response = await api.get<RestaurantInterface[]>(`/restaurants`, {
      params: {
        name_like: search,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Faleid fetch restauranst from api.');
  }
}
