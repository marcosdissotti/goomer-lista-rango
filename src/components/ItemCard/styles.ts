import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  width: 386px;
  height: 115px;

  display: flex;

  opacity: 1;
  box-shadow: 0px 4px 8px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;

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
