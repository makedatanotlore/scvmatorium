import { createGlobalStyle } from 'styled-components/macro';
import wall from 'assets/wall.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: visible;
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.primary};
    background: url(${wall}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    margin: 0;
    font-size: ${({ theme }) => theme.text.size};
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 100%;

    ::-webkit-scrollbar {
      width: 0.5em;
      background-color: ${({ theme }) => theme.faded};
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
