import React from 'react';

import veganRestaurantImg from '../../assets/images/default.jpg';

import { Container, Informations } from './styles';

interface ItemCard {
  name: string;
  image?: string;
  description?: string;
  price: number;
}

const ItemCard: React.FC<ItemCard> = ({ name, price, image, description }) => {
  return (
    <Container>
      <img src={image || veganRestaurantImg} />
      <Informations>
        {name && <p className="name">{name}</p>}
        {description && <p>{description}</p>}
        {price && <small>R$ {price.toFixed(2)}</small>}
      </Informations>
    </Container>
  );
};

export default ItemCard;
