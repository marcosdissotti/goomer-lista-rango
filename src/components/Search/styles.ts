import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.form`
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
