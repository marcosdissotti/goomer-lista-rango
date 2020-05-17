import React, { useState, useEffect, FormEvent } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import ReactLoading from 'react-loading';

import {
  Accordion,
  ItemCard,
  RestaurantInformation,
  Modal,
} from '../../components';
import { colors } from '../../styles';
import { fetchMenu } from '../../services/menu';

import { GroupMenuInterface, Sale } from '../../interfaces/menu.interfaces';
import { Hours } from '../../interfaces/restaurant.interfaces';

import { checkIsOpenMenu } from '../../utils/menu';

import { Container, Search, SearchWrapper, Icon, Card } from './styles';

interface RestaurantParams {
  id: string;
}

interface RestaurantLocations {
  id: string;
  name: string;
  image: string;
  address: string;
  sales?: Sale;
  hours: Array<Hours>;
}

const Restaurant: React.FC = () => {
  const { params } = useRouteMatch<RestaurantParams>();
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [found, setFound] = useState<boolean>(false);
  const { state } = useLocation<RestaurantLocations>();
  const [menu, setMenu] = useState<GroupMenuInterface[]>([]);
  const [modal, setModal] = useState<boolean>();

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
    setLoading(true);
    const response = await fetchMenu(state.id, search);

    if (response) {
      setMenu(response);
      setFound(true);
    }
    setLoading(false);
    setSearch('');
  }

  return (
    <>
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
                  {!loading ? (
                    <Icon src={require('../../assets/icons/search.svg')} />
                  ) : (
                    <ReactLoading
                      type={'spinningBubbles'}
                      color={colors.darkGrey}
                      width={16}
                      height={16}
                      delay={1000}
                    />
                  )}
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
                        <Card key={index} onClick={() => setModal(true)}>
                          {console.log('modal', modal)}
                          <ItemCard
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            sales={item.sales && item.sales}
                          />
                        </Card>
                      ))}
                  </div>
                </Accordion>
              ))}
          </div>
          <aside></aside>
        </section>
        {modal && <Modal />}
      </Container>
    </>
  );
};

export default Restaurant;
