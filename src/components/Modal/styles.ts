import styled from 'styled-components';
import { colors } from '../../styles';
import { FiX } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

  z-index: +1;

  display: flex;

  position: fixed;
  top: 0;
  left: 0;

  background: #00000033 0% 0% no-repeat padding-box;
  opacity: 1;

  p.name {
    margin-bottom: 4px;

    color: #404040;
    font-size: 24px;
    text-align: center;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
  }

  p.description {
    width: 350px;

    opacity: 1;
    color: #404040;
    font-size: 16px;
    text-align: left;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
  }

  small.cash-button {
    margin-left: 50px;

    color: #ffffff;
    font-size: 20px;
    text-align: left;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
  }

  small {
    color: #009ca3;
    font-size: 32px;
    text-align: center;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
  }

  div.item {
    display: flex;
    flex-direction: column;
  }

  div.item-container {
    display: flex;
  }

  div.left-wrapper {
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  div.right-wrapper {
    display: flex;
    align-items: flex-end;
  }

  div.exit-wrapper {
    width: 100%;
    margin: -50px 0 0 55px;

    display: flex;
    justify-content: flex-end;
  }

  div.exit {
    width: 48px;
    height: 48px;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;

    cursor: pointer;

    transition: transform 0.5s;

    &:hover {
      transform: rotate(90deg) scale(1.1);
    }
  }

  div.cart {
    display: flex;
    margin-top: 30px;
  }

  div.left-cart {
    width: 50%;
    display: flex;
  }

  div.right-cart {
    width: 50%;
    display: flex;
  }

  div.increment-items {
    width: 125px;
    height: 50px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;

    display: flex;

    font-size: 24px;

    button {
      width: 32px;
      height: 100%;

      font-size: 32px;

      border: unset;
      background: unset;
      box-shadow: unset;

      color: #009ca3;
    }

    div.minus-wrapper {
      width: 33.33%;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #009ca3;
    }
    div.plus-wrapper {
      width: 33.33%;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #009ca3;
    }
    div.amount-wrapper {
      width: 33.33%;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #009ca3;
    }
  }

  button.add-cart {
    width: 265px;
    height: 50px;
    border-radius: 4px;
    border: 0;

    display: flex;
    justify-content: center;

    opacity: 1;
    border-radius: 4px;
    background: #009ca3 0% 0% no-repeat padding-box;

    opacity: 1;
    color: #ffffff;
    font-size: 20px;
    text-align: left;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
  }

  img {
    width: 100%;
    height: 196px;

    margin-bottom: 45px;

    object-fit: cover;
  }
  .modal {
    width: 601px;
    height: 484px;

    display: block;

    margin: auto;
    background-color: #fff;
    padding: 2em 3em;
    text-align: center;
    border-radius: 0.5em;

    z-index: +1;
  }
`;

export const Icon = styled(FiX)`
  width: 20px;
  height: 20px;
  color: ${colors.black};
`;
