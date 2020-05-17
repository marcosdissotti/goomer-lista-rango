import React, { useState, useEffect, FormEvent } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import { Accordion, ItemCard, RestaurantInformation } from '../../components';

import { fetchMenu } from '../../services/menu';

import { GroupMenuInterface } from '../../interfaces/menu.interfaces';
import { Hours } from '../../interfaces/restaurant.interfaces';

import { checkIsOpenMenu } from '../../utils/menu';

import { Container, Search, SearchWrapper, Icon } from './styles';

interface RestaurantParams {
  id: string;
}

interface RestaurantLocations {
  id: string;
  name: string;
  image: string;
  address: string;
  hours: Array<Hours>;
}

const Restaurant: React.FC = () => {
  const { params } = useRouteMatch<RestaurantParams>();
  const [search, setSearch] = useState<string>('');
  const [found, setFound] = useState<boolean>(false);
  const { state } = useLocation<RestaurantLocations>();
  const [menu, setMenu] = useState<GroupMenuInterface[]>([]);

  useEffect(() => {
    handleMenu();
  }, []);

  async function handleMenu() {
    const data = await fetchMenu(params.id);
    const updated = checkIsOpenMenu(data);
    setMenu(updated);
  }

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await fetchMenu(state.id, search);

    if (response) {
      setMenu(response);
      setFound(true);
    }

    setSearch('');
  }

  return (
    <Container>
      <RestaurantInformation
        name={state.name}
        image={state.image}
        address={state.address}
        hours={state.hours}
      />
      <section>
        <div>
          <SearchWrapper>
            <Search onSubmit={handleSearch}>
              <div className="placeholder">Buscar no cardápio</div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <Icon src={require('../../assets/icons/search.svg')} />
              </button>
            </Search>
          </SearchWrapper>

          {menu &&
            menu.map((group, groupIndex) => (
              <Accordion
                name={group.name}
                found={found}
                key={groupIndex}
                first={groupIndex === 0 ? true : false}
              >
                <div className="cards-container">
                  {group.items &&
                    group.items.map((item, index) => (
                      <div className="card" key={index}>
                        <ItemCard
                          name={item.name}
                          price={item.price}
                          image={item.image}
                        />
                      </div>
                    ))}
                </div>
              </Accordion>
            ))}
        </div>
        <aside></aside>
      </section>
    </Container>
  );
};

export default Restaurant;
