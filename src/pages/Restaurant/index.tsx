import React, { useState, useEffect } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import { Accordion, ItemCard, RestaurantInformation } from '../../components';

import { fetchMenu } from '../../services/menu.services';

import { MenuInterface } from '../../interfaces/menu.interfaces';

import { Container, Header, Search } from './styles';

interface RestaurantParams {
  id: string;
}

interface RestaurantLocations {
  name: string;
}

const Restaurant: React.FC = () => {
  const { params } = useRouteMatch<RestaurantParams>();
  const { state } = useLocation<RestaurantLocations>();
  const [menu, setMenu] = useState<MenuInterface[]>([]);

  console.log('state', state);

  useEffect(() => {
    handleMenu();
  }, []);

  async function handleMenu() {
    const data = await fetchMenu(params.id);

    setMenu(data);
  }

  return (
    <Container>
      <RestaurantInformation name={state.name} />
      <section>
        <div>
          <div className="search-wraper">
            <Search />
          </div>

          <Accordion>
            <div className="cards-container">
              <div className="card">
                <ItemCard name="Macarrão" price={0} image="" />
              </div>
              <div className="card">
                <ItemCard name="Macarrão" price={0} image="" />
              </div>
              <div className="card">
                <ItemCard name="Macarrão" price={0} image="" />
              </div>
            </div>
          </Accordion>
          <Accordion>
            <div className="card">
              <ItemCard name="Pizza" price={0} image="" />
            </div>
          </Accordion>
          <Accordion>
            <div className="card">
              <ItemCard name="Lazanha" price={0} image="" />
            </div>
          </Accordion>
        </div>
        <aside></aside>
      </section>
    </Container>
  );
};

export default Restaurant;
