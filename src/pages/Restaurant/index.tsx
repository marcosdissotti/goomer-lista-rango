import React, { useState, useEffect } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import { Accordion, ItemCard, RestaurantInformation } from '../../components';

import { fetchMenu } from '../../services/menu';

import { GroupMenuInterface } from '../../interfaces/menu.interfaces';

import { checkIsOpenMenu } from '../../utils/menu';

import { Container, Header } from './styles';

interface RestaurantParams {
  id: string;
}

interface RestaurantLocations {
  name: string;
  image: string;
}

const Restaurant: React.FC = () => {
  const { params } = useRouteMatch<RestaurantParams>();
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

  console.log('menu', menu);

  return (
    <Container>
      <RestaurantInformation name={state.name} image={state.image} />
      <section>
        <div>
          <div className="search-wraper">{/* <Search /> */}</div>

          {menu &&
            menu.map((group, groupIndex) => (
              <Accordion name={group.name} key={groupIndex}>
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
