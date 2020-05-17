import styled from 'styled-components';

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

  img {
    height: 196px;

    background: red;
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
  }
`;
