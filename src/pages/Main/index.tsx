import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

import veganRestaurantImg from '../../assets/images/vegan-restaurant-logo-design_1438-10.png';

import { Search } from '../../components';

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

interface Restaurant {
  name: string;
  address: string;
  hours: {
    from: string;
    to: string;
    days: Array<number>;
  };
  image: string;
}

const Main: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetchRestaurants();

    console.log(restaurants);
  }, []);

  async function fetchRestaurants() {
    const response = await api.get<Restaurant[]>(`/restaurants`);
    console.log(response.data);
    setRestaurants(response.data);
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
                  <Status>
                    <div>
                      <small>Aberto agora</small>
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
