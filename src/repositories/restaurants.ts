import api from '../config/api';

import { RestaurantInterface } from '../interfaces/restaurant.interfaces';

export async function getRestaurants(
  params: Object = {},
): Promise<RestaurantInterface[]> {
  try {
    const response = await api.get<RestaurantInterface[]>(`/restaurants`, {
      params,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Faleid fetch restauranst from api.');
  }
}
