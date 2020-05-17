import React from 'react';

import veganRestaurantImg from '../../assets/images/default.jpg';
import award from '../../assets/images/award.svg';

import { Sale } from '../../interfaces/menu.interfaces';

import { Container, Informations } from './styles';

interface ItemCard {
  name: string;
  image?: string;
  description?: string;
  price: number | undefined;
  onChange?: any;
  sales?: Sale[] | undefined;
}

const ItemCard: React.FC<ItemCard> = ({
  name,
  price,
  image,
  description,
  sales,
}) => {
  function renderSales() {
    return (
      openSale && (
        <div className="sales-wrapper">
          <div className="sales">
            <span>
              <img className="icon-award" src={award} />
              {openSale.description}
            </span>
          </div>
        </div>
      )
    );
  }

  const openSale = sales ? sales.find((sale) => sale.isOpen) : false;

  return (
    <Container>
      <img
        src={image || veganRestaurantImg}
        alt="foto da refeição do cardapio"
      />
      <Informations>
        {sales && renderSales()}
        <div className="info-wrapper">
          {name && <p className="name">{name}</p>}
          {description && <p className="description">{description}</p>}
          {openSale ? (
            <div className="price-from-sales">
              {price && <small>R$ {openSale.price.toFixed(2)}</small>}
              {price && (
                <small className="line-through">R$ {price.toFixed(2)}</small>
              )}
            </div>
          ) : (
            <>{price && <small>R$ {price.toFixed(2)}</small>}</>
          )}
        </div>
      </Informations>
    </Container>
  );
};

export default ItemCard;
