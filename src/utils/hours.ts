import { getISODay } from 'date-fns';

import { Hours } from '../interfaces/restaurant.interfaces';

export const checkIsOpen = (item: any): boolean => {
  if (!item.hours) return false;

  const now = new Date();

  const isSomeForTrue = item.hours.map((hour: Hours) => {
    const [fromH, fromM] = hour.from?.split(':') || [0, 0];
    const [toH, toM] = hour.to?.split(':') || [0, 0];

    // HH: mm;
    const from = new Date();
    from.setHours(Number(fromH));
    from.setMinutes(Number(fromM));
    from.setSeconds(0);

    const to = new Date();
    to.setHours(Number(toH));
    to.setMinutes(Number(toM));
    to.setSeconds(0);

    if (from >= to) {
      to.setDate(to.getDate() + 1);
    }

    // if (hour.days.includes(getISODay(now) - 1)) { // TRATAR QUANDO PASSA DA MEIA NOITE
    //   if (to >= from) {
    //     from.setDate(from.getDate() - 1);
    //   }
    // }

    if (now >= from && now <= to) {
      if (hour.days.includes(getISODay(now))) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });

  return isSomeForTrue.includes(true);
};
