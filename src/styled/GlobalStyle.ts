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
    font-size: 1em;
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 320px;
    max-width: 100%;

    ::-webkit-scrollbar {
      width: 0.5em;
      background-color: ${({ theme }) => theme.faded};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.text.secondary};
      outline: none;
    }
  }
`;
