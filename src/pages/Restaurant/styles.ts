import styled from 'styled-components';

import { Search as SearchComponent } from '../../components';

export const Container = styled.div`
  margin: auto;
  width: 70%;
  min-width: 1100px;
  height: 100%;
  padding-left: 74px;
  padding-right: 74px;
  padding-top: 35px;

  section {
    display: flex;

    div {
      width: 100%;
      height: 100%;
    }

    div.search-wraper {
      margin-bottom: 24px;

      display: flex;
    }

    aside {
      display: flex;
      width: 282px;
      height: 70vh;

      opacity: 1;
      border-radius: 2px;
      margin-left: 134px;
      background: #e6e6e6 0% 0% no-repeat padding-box;
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px 30px;

    justify-content: center;

    align-items: center;
  }

  .card {
  }
`;

export const Header = styled.header``;

export const Search = styled(SearchComponent)``;
