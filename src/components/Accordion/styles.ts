import styled, { css } from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div<{ active: boolean }>`
  width: 100%;
  height: 42px;

  .accordion {
    display: flex;

    width: 100%;
    padding: 18px;
    border-top: none;
    border-left: none;
    border-right: none;

    transition: 0.4s;

    opacity: 1;
    color: #444;
    background: #ffffff 0% 0% no-repeat padding-box;

    .icon-wrapper {
      width: 50%;

      text-align: right;
    }
  }

  .accordion:hover {
    background-color: #ccc;
  }

  ${(props) =>
    props.active
      ? css`
          div.panel {
            width: 100%;
            height: 100%;
            padding: 0 18px;

            overflow: hidden;
            background-color: red;
          }
        `
      : css`
          div.panel {
            display: none;
          }
        `}

  h2 {
    width: 50%;

    opacity: 1;
    font-size: 16px;
    text-align: left;
    letter-spacing: 0px;
    color: ${colors.darkGrey};
    font-family: Montserrat-Medium;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: -2px;

  opacity: 1;
`;
