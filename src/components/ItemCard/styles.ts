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
  margin-left: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 8px;

    opacity: 1;
    font-size: 16px;
    letter-spacing: 0px;
    color: ${colors.darkGrey};
    font-family: Montserrat-Medium;
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
