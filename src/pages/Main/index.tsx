import React, { useState, FormEvent, useEffect } from 'react';

import { RestaurantInterface } from '../../interfaces/restaurant.interfaces';
import veganRestaurantImg from '../../assets/images/vegan-restaurant-logo-design_1438-10.png';
import { fetchRestaurants } from '../../services/restaurants';

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
  Search,
  Icon,
} from './styles';

const Main: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [search, setSearch] = useState<string>('');
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

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await fetchRestaurants(search);

    setRestaurants(response);
    setSearch('');
  }

  return (
    <Container>
      <TitleWrapper>
        <Title>Bem-vindo ao Lista Rango</Title>
      </TitleWrapper>

      <SearchWrapper>
        <Search onSubmit={handleSearch}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar estabelecimento"
          />
          <button type="submit">
            <Icon src={require('../../assets/icons/search.svg')} />
          </button>
        </Search>
      </SearchWrapper>

      <RestaurantsWrapper>
        <section className="restaurants">
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.name}
              to={{
                pathname: `/restaurante/${restaurant.id}`,
                state: restaurant,
              }}
            >
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
