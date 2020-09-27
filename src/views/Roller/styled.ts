import styled from 'styled-components';

export const FlexWrapper = styled.div`
  grid-area: roller;
  display: flex;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
  line-height: 2rem;
`;

export const StyledButton = styled.button`
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
  max-width: 250px;

  :active {
    background-color: ${({ theme }) => theme.button.background.active};
    color: ${({ theme }) => theme.button.text.active};
  }
`;
