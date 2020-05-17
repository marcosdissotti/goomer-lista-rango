import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  width: 386px;
  max-height: 115px;

  display: flex;

  opacity: 1;
  box-shadow: 0px 4px 8px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;

  transition: 0.2s;

  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }

  img {
    max-width: 115px;
    height: 115px;
    object-fit: cover;
  }

  .informations {
    display: flex;
    flex-direction: column;
  }
`;

export const Informations = styled.div`
  height: 100%;
  margin-left: 8px;
  margin-right: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  div.info-wrapper {
    margin-top: -8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div.name-wrapper {
    width: 100%;

    display: flex;
    align-items: center;
  }

  div.sales-wrapper {
    width: 100%;
    max-height: 21px;
    margin-top: 8px;

    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  div.sales {
    width: auto;
    height: 18px;
    padding-left: 4px;
    padding-right: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #2b0d61 0% 0% no-repeat padding-box;
    border-radius: 11px;
    opacity: 1;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 1;
    color: #ffffff;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
    white-space: nowrap;

    img.icon-award {
      height: 12px;
      margin-right: 4px;
    }
  }

  p.description {
    font-size: 12px;
  }

  p {
    opacity: 1;
    font-size: 16px;
    letter-spacing: 0px;
    color: ${colors.darkGrey};
    font-family: Montserrat-Medium;
    text-align: left;
    margin-bottom: 8px;

    &:hover {
      text-decoration: underline;
    }
  }

  small {
    opacity: 1;
    color: #009ca3;
    font-size: 16px;
    text-align: left;
    letter-spacing: 0px;
    font-family: Montserrat-Medium;
  }
`;
