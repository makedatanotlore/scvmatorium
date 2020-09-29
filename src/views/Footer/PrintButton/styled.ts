import { mediaQuery } from 'utils/mediaQueries';
import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.75rem;
  padding-top: 12px;
  padding-left: 6px;
  padding-right: 6px;
`;

export const StyledButton = styled.button`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.button.text.color};
  margin-bottom: 6px;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  width: auto;
  padding: 0.5rem;
  align-self: center;
  background-color: ${({ theme }) => theme.button.background.color};
  min-width: 10rem;
  min-height: 2rem;
  font-weight: 500;
  font-family: Roboto mono, monospace;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${({ theme }) => theme.button.background.hover};
      color: ${({ theme }) => theme.button.text.hover};
    }
  }
  :active {
    background-color: ${({ theme }) => theme.button.background.active};
    color: ${({ theme }) => theme.button.text.active};
  }

  ${mediaQuery.phone} {
    font-size: 1rem;
  }

  ${mediaQuery.phone} {
    font-size: 1rem;
  }
`;

export const PrintWrapper = styled.div``;
