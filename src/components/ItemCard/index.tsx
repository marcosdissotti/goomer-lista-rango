import React from 'react';

import veganRestaurantImg from '../../assets/images/default.jpg';
import award from '../../assets/images/award.svg';

import { Container, Informations } from './styles';

interface ItemCard {
  name: string;
  image?: string;
  description?: string;
  price: number | undefined;
  onChange?: any;
}

const ItemCard: React.FC<ItemCard> = ({ name, price, image, description }) => {
  return (
    <Container>
      <img
        src={image || veganRestaurantImg}
        alt="foto da refeição do cardapio"
      />
      <Informations>
        <div className="sales-wrapper">
          <div className="sales">
            <span>
              <img className="icon-award" src={award} /> promo teste
            </span>
          </div>
        </div>
        <div className="info-wrapper">
          {name && <p className="name">{name}</p>}
          {description && <p className="description">{description}</p>}
          {price && <small>R$ {price.toFixed(2)}</small>}
        </div>
      </Informations>
    </Container>
  );
};

export default ItemCard;
