import { menuRepository } from '../repositories';

import { GroupMenuInterface } from '../interfaces/menu.interfaces';

export async function fetchMenu(
  restaurantId: string,
): Promise<GroupMenuInterface[]> {
  try {
    const data = await menuRepository.getMenu(restaurantId);

    const menu = data.reduce(function (menu, item) {
      return {
        ...menu,
        [item.group]: {
          name: item.group,
          items: menu[item.group] ? [...menu[item.group].items, item] : [item],
        },
      };
    }, Object.create(null));

    return Object.values(menu);
  } catch (error) {
    console.error(error);
    throw new Error('Faleid fetch menu from services.');
  }
}
