import React, { useEffect, useState } from 'react';

import weekday from '../../enums/weekdays';

import { RestaurantInterface } from '../../interfaces/restaurant.interfaces';
import veganRestaurantImg from '../../assets/images/vegan-restaurant-logo-design_1438-10.png';

import { Container } from './styles';

const RestaurantInformation: React.FC<RestaurantInterface> = ({
  id,
  name,
  address,
  hours,
  image,
}) => {
  const [hoursDescriptions, setHoursDescriptions] = useState<string[]>([]);

  useEffect(() => {
    const strings = getHoursDescriptions();
    if (strings) {
      setHoursDescriptions(strings);
    }
  }, []);

  function getHoursDescriptions(): any[] | undefined {
    const hoursDescriptions = hours?.map((times) => {
      const weekDays = times.days.map((day) => {
        return weekday[day - 1];
      });

      const lastDay = weekDays.slice(-1)[0];
      const fisrtDay = weekDays.slice(0)[0];
      // .join(',')
      return times ? (
        <>
          {`${fisrtDay} à ${lastDay} das`}
          <b>{` ${times.from} às ${times.to}`}</b>
        </>
      ) : (
        <></>
      );
    });

    console.log(hoursDescriptions);

    return hoursDescriptions;
  }

  return (
    <Container>
      <img
        src={!image ? veganRestaurantImg : image}
        alt="logo do restaurante"
      />
      <div className="informations">
        <h1>{name}</h1>
        <p>{address}</p>

        <div className="opening">
          {hoursDescriptions &&
            hoursDescriptions.map((description, index) => (
              <small key={index}>{description}</small>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default RestaurantInformation;
