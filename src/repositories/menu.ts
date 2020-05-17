import api from '../config/api';

import { MenuInterface } from '../interfaces/menu.interfaces';

export async function getMenu(
  restaurantId: string,
  search?: string,
): Promise<MenuInterface[]> {
  try {
    const response = await api.get<MenuInterface[]>(
      `/restaurants/${restaurantId}/menu`,
      {
        params: {
          name_like: search,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Faleid fetch menu from api.');
  }
}
