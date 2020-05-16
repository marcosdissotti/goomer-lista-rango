import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 26px;

  div.informations {
    margin-left: 22px;

    display: flex;
    flex-direction: column;

    div.opening {
      display: flex;
      flex-direction: column;
    }

    h1 {
      margin-bottom: 4px;
      opacity: 1;
      color: #404040;
      font-size: 24px;
      letter-spacing: 0px;
      font-family: Montserrat-Medium;
    }
    p {
      max-width: 528px;
      margin-bottom: 8px;
      opacity: 1;
      color: #404040;
      font-size: 16px;
      letter-spacing: 0px;
      font-family: Montserrat-Medium;
    }

    small {
      opacity: 1;
      color: #404040;
      font-size: 12px;
      letter-spacing: 0px;
      font-family: Montserrat-Medium;
    }
  }

  img {
    width: 145px;
    height: 145px;
  }
`;
