import { createGlobalStyle } from 'styled-components/macro';
import wall from 'assets/wall.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    overflow-y: scroll;
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.primary};
    background: url(${wall}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    margin: 0;
    font-size: 1rem;
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 320px;
    max-width: 100%;

    ::-webkit-scrollbar {
      display: none;
      width: 0.25rem;
      background-color: ${({ theme }) => theme.text.inverted};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.text.secondary};
      outline: none;
    }

    a {
      color: ${({ theme }) => theme.button.text.hover};
      background-color: ${({ theme }) => theme.button.background.hover};
      text-transform: uppercase;
      text-decoration: none;
      padding-left: 0.25em;
      padding-right: 0.25em;
    }

    a:hover {
      color: ${({ theme }) => theme.button.text.active};
      background-color: ${({ theme }) => theme.button.background.active};
    }

    a:active {
      color: ${({ theme }) => theme.button.text.color};
      background-color: ${({ theme }) => theme.button.background.color};
    }

    a:visited {
      color: ${({ theme }) => theme.button.text.hover};
      background-color: ${({ theme }) => theme.button.background.hover};
      :hover {
      color: ${({ theme }) => theme.button.text.active};
      background-color: ${({ theme }) => theme.button.background.active};
    }
    }
  }
`;
