import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.75rem;
  padding-top: 6px;
  padding-left: 6px;
  padding-right: 6px;
  font-style: italic;


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
