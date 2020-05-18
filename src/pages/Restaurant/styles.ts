import styled from 'styled-components';
import media from 'styled-media-query';
import { colors } from '../../styles';

export const Container = styled.div`
  margin: auto;
  width: 70%;
  min-width: 1100px;
  height: 100%;
  padding-left: 74px;
  padding-right: 74px;
  padding-top: 35px;

  ${media.lessThan('large')`
    padding: 0px;
    width: 100%;
    max-width: 100vw;
    min-width: 0;
  `}

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

      ${media.lessThan('large')`
        display: none;
      `}
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px 30px;

    justify-content: center;

    align-items: center;

    ${media.lessThan('large')`
      grid-template-columns: 1fr;
    `}
  }

  .card {
  }
`;

export const Header = styled.header``;

export const SearchWrapper = styled.div`
  width: 50%;
  margin-bottom: 26px;

  display: flex;
  justify-content: center;
`;

export const Search = styled.form`
  width: 100%;
  height: 40px;
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: 1;
  box-shadow: 0px 2px 4px #00000029;
  background: #e6e6e6 0% 0% no-repeat padding-box;

  .placeholder {
    width: 30%;
    height: 100%;
    margin-right: 16px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 1;
    color: #404040;

    text-align: left;

    letter-spacing: 0px;
    background: ${colors.white};
    font-family: Montserrat-Medium, sans-serif;

    ${media.greaterThan('huge')`
      font-size: 14px;
    `}

    ${media.lessThan('huge')`
      font-size: 12px;
    `}
  }

  input[type='text'],
  textarea {
    background: #e6e6e6 0% 0% no-repeat padding-box;
  }

  > input {
    width: 80%;
    border: none;

    font-size: 16px;
    background: #e6e6e6 0% 0% no-repeat padding-box;
    font-family: Montserrat-Medium, sans-serif;

    &::placeholder {
      font-family: Montserrat-Medium;
      font-weight: 400;
      letter-spacing: 0;
      color: ${colors.darkGrey};
      opacity: 1;
    }
  }

  > button {
    border: none;
    padding: 10px 18px 10px 38px;

    background: transparent;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: -2px;

  opacity: 1;
`;

export const Card = styled.button`
  width: 100%;
  height: 100%;
  border: 0px;

  ${media.lessThan('large')`
    width: 80%;
    margin: auto;
  `}
`;
