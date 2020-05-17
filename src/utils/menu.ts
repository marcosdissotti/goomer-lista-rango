import {
  GroupMenuInterface,
  MenuInterface,
  Sale,
} from '../interfaces/menu.interfaces';
import { checkIsOpen } from './hours';

// export const checkIsOpenMenu = (groups: any[]): any => {
//   console.log('groups', groups);
//   return groups.map((group): any => {
//     return group.items.map((item: any): any => ({
//       ...item,
//       isOpen: checkIsOpen(item),
//     }));
//   });
// };

export const checkIsOpenMenu = (groups: GroupMenuInterface[]) => {
  return groups.map((group): any => {
    return {
      ...group,
      items: group.items.map(
        (item): MenuInterface => {
          return !item.sales
            ? item
            : {
                ...item,
                sales: item.sales.map(
                  (sale: Sale): Sale => ({
                    ...sale,
                    isOpen: checkIsOpen(sale),
                  }),
                ),
              };
        },
      ),
    };
  });
};
