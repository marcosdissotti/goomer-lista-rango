import {
  GroupMenuInterface,
  MenuInterface,
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

export const checkIsOpenMenu = (groups: GroupMenuInterface[]): any => {
  return groups.map((group): any => {
    return group.items.map(
      (item): MenuInterface => ({
        ...item,
        isOpen: checkIsOpen(item),
      }),
    );
  });
};
