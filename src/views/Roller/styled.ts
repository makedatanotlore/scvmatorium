import styled from 'styled-components';

export const FlexWrapper = styled.div`
  grid-area: roller;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  flex-direction: column;
  text-align: right;
`;

export const StyledText = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  transform: rotate(5deg);
  position: relative;
  margin-left: 2px;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledButton = styled.button`
  font-family: Roboto mono, monospace;
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
  margin-left: auto;
  margin-right: auto;
  :active {
    background-color: ${({ theme }) => theme.button.background.active};
    color: ${({ theme }) => theme.button.text.active};
  }
`;
