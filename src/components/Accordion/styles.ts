import styled, { css } from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 16px;

  .icon-wrapper {
    width: 50%;

    text-align: right;
  }

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

export const AccordionWrapper = styled.button`
  width: 100%;
  height: 42px;

  display: flex;

  padding: 18px;
  border-top: none;
  border-left: none;
  border-right: none;

  transition: 0.4s;

  opacity: 1;
  color: #444;
  background: #ffffff 0% 0% no-repeat padding-box;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: -2px;

  opacity: 1;
`;

export const Painel = styled.div<{ active: boolean }>`
  ${(props) =>
    props.active
      ? css`
          margin: 24px 0;
        `
      : css`
          display: none;
        `}
`;
