import React, { useState, FormEvent, useEffect } from 'react';

import { Search } from '../../components';
import { RestaurantInterface } from '../../interfaces/restaurant.interfaces';
import veganRestaurantImg from '../../assets/images/vegan-restaurant-logo-design_1438-10.png';
import { fetchRestaurants } from '../../services/restaurants.services';

import {
  Container,
  Title,
  TitleWrapper,
  SearchWrapper,
  RestaurantsWrapper,
  Restaurant,
  Wrapper,
  StatusWrapper,
  Status,
  Informations,
} from './styles';

const Main: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [restaurants, setRestaurants] = useState<RestaurantInterface[]>([]);

  useEffect(() => {
    handleRestaurants();
  }, []);

  // handle - interações do usuário / get

  async function handleRestaurants() {
    const data = await fetchRestaurants();
    setRestaurants(data);
  }

  async function handleSearchRestaurant(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    // const response = await api.get<Restaurant>(`restaurants`);

    // const Restaurant = response.data;

    // setRepositories([...repositories, Restaurant]);
    // setNewRepo('');
  }

  return (
    <Container>
      <TitleWrapper>
        <Title>Bem-vindo ao Lista Rango</Title>
      </TitleWrapper>

      <SearchWrapper>
        <Search />
      </SearchWrapper>

      <RestaurantsWrapper>
        <section className="restaurants">
          {restaurants.map((restaurant) => (
            <Restaurant key={restaurant.name} href="teste">
              <img src={restaurant.image || veganRestaurantImg}></img>
              <Wrapper>
                <StatusWrapper>
                  <Status isOpen={isOpen}>
                    <div>
                      <small>{isOpen ? 'Aberto agora' : 'Fechado'}</small>
                    </div>
                  </Status>
                </StatusWrapper>
                <Informations>
                  <p>{restaurant && restaurant.name}</p>
                  <small>{restaurant && restaurant.address}</small>
                </Informations>
              </Wrapper>
            </Restaurant>
          ))}
        </section>
      </RestaurantsWrapper>
    </Container>
  );
};

export default Main;
