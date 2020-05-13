import React from 'react';

import { Container, Icon } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <input placeholder="Buscar estabelecimento" />
      <button type="submit">
        <Icon src={require('../../assets/icons/search.svg')} />
      </button>
    </Container>
  );
};

export default Search;
