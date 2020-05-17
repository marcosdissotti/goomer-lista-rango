import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.white};

  section {
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: center;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;

  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  opacity: 1;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0;
  color: ${colors.darkGrey};
  font-family: Montserrat-Medium;
`;

export const SearchWrapper = styled.div`
  width: 50%;
  margin-bottom: 26px;

  display: flex;
  justify-content: center;
`;

export const RestaurantsWrapper = styled.div`
  width: 100%;
  padding: 26px 72px 0 72px;

  .restaurants {
    width: min-content;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 34px 48px;
  }
`;

export const Restaurant = styled(Link)`
  width: 368px;
  height: 100px;

  display: flex;

  opacity: 1;
  border-radius: 4px;
  box-shadow: 0px 2px 4px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;
  transition: 0.2s;

  &:hover {
    transform: scale(1.08);
  }

  img {
    max-width: 100px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const StatusWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const Status = styled.div<{ isOpen: boolean | undefined }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: -15px 0 0 15px;

  position: absolute;

  background: #2b0d61 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  opacity: 1;

  div {
    width: 100%;
    height: 100%;
  }

  small {
    height: 100%;
    display: flex;
    align-items: center;

    opacity: 1;
    color: #ffffff;
    font-size: 8px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
  }

  ${(props) =>
    !props.isOpen &&
    css`
      opacity: 1;
      text-align: center;
      background: #b5abd4;

      div {
        width: 100%;
        height: 100%;
      }

      small {
        height: 100%;
        display: flex;
        justify-content: center;
      }
    `};
`;

export const Informations = styled.div`
  height: 100%;
  margin-left: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    text-decoration: underline;
  }

  p {
    opacity: 1;
    color: ${colors.darkGrey};
    font-size: 16px;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
  }

  small {
    opacity: 1;
    color: ${colors.darkGrey};
    font-size: 12px;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
  }
`;

export const Search = styled.form`
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 10px 18px 10px 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: 1;
  box-shadow: 0px 2px 4px #00000029;
  background: ${colors.lightGrey} 0% 0% no-repeat padding-box;

  input[type='text'],
  textarea {
    background-color: ${colors.lightGrey};
  }

  > input {
    width: 80%;
    border: none;

    font-size: 16px;
    color: ${colors.mirage};
    font-family: Montserrat-Medium, sans-serif;
    background: ${colors.lightGrey};

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

    background: transparent;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: -2px;

  opacity: 1;
`;
