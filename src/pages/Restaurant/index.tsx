import React from 'react';

import { Search, Accordion } from '../../components';
import veganRestaurantImg from '../../assets/images/vegan-restaurant-logo-design_1438-10.png';

import { Container, Header } from './styles';

const Restaurant: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={veganRestaurantImg} />
        <div className="informations">
          <h1>Nome do Restaurante</h1>
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
      </Header>
      <section>
        <main>
          <Search />
          <Accordion>
            <p>adasdasdasda</p>
          </Accordion>
        </main>
        <aside>kjkl</aside>
      </section>
    </Container>
  );
};

export default Restaurant;
