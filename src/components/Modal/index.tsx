import React from 'react';
import veganRestaurantImg from '../../assets/images/vegan-restaurant-logo-design_1438-10.png';

import { Container } from './styles';

const Modal: React.FC = () => {
  return (
    <Container>
      <div className="modal">
        <div className="exit"></div>
        <img src="https://image.freepik.com/fotos-gratis/strogonoff-de-frango-e-um-prato-originario-da-cozinha-russa_59529-684.jpg"></img>
        <div className="item">
          <div className="left-wrapper"></div>
          <div className="right-wrapper"></div>
          <div className="cart">
            <div className="increment-items"></div>
            <button className="add-cart"> </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
