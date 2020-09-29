import styled from 'styled-components';

export const FlexWrapper = styled.div`
  grid-area: roller;
  display: flex;
  justify-content: center;
  padding: 12px;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-family: Roboto mono, monospace;
  margin-left: auto;
  margin-right: auto;
  border: none;
  background-color: ${({ theme }) => theme.button.background.color};
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.button.text.color};
  font-size: 1.25em;
  height: 40px;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  font-style: normal;
  font-size: 1em;
  min-width: 160px;
  padding-left: 1rem;
  padding-right: 1rem;
  :active {
    background-color: ${({ theme }) => theme.button.background.active};
    color: ${({ theme }) => theme.button.text.active};
  }
`;
