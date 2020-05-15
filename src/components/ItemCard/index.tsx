import React from 'react';

import veganRestaurantImg from '../../assets/images/vegan-restaurant-logo-design_1438-10.png';

import { Container, Informations } from './styles';

interface ItemCard {
  name: string;
  image: string;
  price: number;
}

const ItemCard: React.FC<ItemCard> = ({ name, price, image }) => {
  return (
    <Container>
      <img src={veganRestaurantImg} />
      <Informations>
        <p>{name}</p>
        <small>{price}</small>
      </Informations>
    </Container>
  );
};

export default ItemCard;
