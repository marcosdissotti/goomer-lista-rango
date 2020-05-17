import React, { useState, FormEvent, useEffect } from 'react';
import cron, { ScheduledTask } from 'node-cron';

import { RestaurantInterface } from '../../interfaces/restaurant.interfaces';
import veganRestaurantImg from '../../assets/images/vegan-restaurant-logo-design_1438-10.png';
import { fetchRestaurants } from '../../services/restaurants';

import { checkIsOpenRestaurant } from '../../utils/restaurants';

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
  const [schedules, setSchedules] = useState<ScheduledTask>();
  const [search, setSearch] = useState<string>('');
  const [restaurants, setRestaurants] = useState<RestaurantInterface[]>([]);

  useEffect(() => {
    handleRestaurants();

    setSchedules(
      cron.schedule('*/1 * * * *', () => checkIsOpenRestaurant(restaurants), {
        scheduled: true,
        timezone: 'America/Sao_Paulo',
      }),
    );
  }, []);

  useEffect(() => {
    if (!schedules) {
      return;
    }

    schedules.destroy();
    setSchedules(
      cron.schedule('*/1 * * * *', () => checkIsOpenRestaurant(restaurants), {
        scheduled: true,
        timezone: 'America/Sao_Paulo',
      }),
    );
  }, [restaurants]);

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
                  <Status isOpen={restaurant.isOpen}>
                    <div>
                      <small>
                        {restaurant.isOpen ? 'Aberto agora' : 'Fechado'}
                      </small>
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
