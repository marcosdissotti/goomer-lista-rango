import api from './api.services';

import { MenuInterface } from '../interfaces/menu.interfaces';

export async function fetchMenu(id: string): Promise<MenuInterface[]> {
  try {
    const response = await api.get<MenuInterface[]>(`/restaurants/${id}/menu`);
    return response.data;
  } catch (error) {
    throw new Error('Faleid fetch menu from api.');
  }
}
