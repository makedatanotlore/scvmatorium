import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-size: cover;
  align-items: start;
  font-size: ${({ theme }) => theme.fontSize.body};

  grid-template-columns: 1fr 90% 1fr;
  grid-template-rows: min-content 1fr max-content;
  grid-template-areas:
    '. header .'
    '. sheet .'
    '. footer .';



  a {
    color: ${({ theme }) => theme.button.background.hover};
    background-color: transparent;
    text-transform: inherit;
    text-decoration: none;
    padding-left: 0;
    padding-right: 0;
  }

  a:hover {
    color: ${({ theme }) => theme.button.text.active};
    background-color: transparent;
  }

  a:active {
    color: ${({ theme }) => theme.button.background.hover};
    background-color: transparent;
  }

  a:visited {
    color: ${({ theme }) => theme.button.background.hover};
    background-color: transparent;

    :hover {
      color: ${({ theme }) => theme.button.text.active};
      background-color: transparent;
    }
  }
`;

export const Footer = styled.div`
  color: ${({ theme }) => theme.text.primary};
  grid-area: footer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: end;
  margin-bottom: 12px;
  font-size: 10px;
`;
