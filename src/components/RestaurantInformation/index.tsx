import React from 'react';

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
  return (
    <Container>
      <img src={!image ? veganRestaurantImg : image} />
      <div className="informations">
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="opening">
          <small>Segunda à Sexta: 11:30 às 15:00</small>
          <small>Sábados: 11:30 às 22:00</small>
          <small>Domingos e Feriados: 11:30 às 15:00</small>
        </div>
      </div>
    </Container>
  );
};

export default RestaurantInformation;
