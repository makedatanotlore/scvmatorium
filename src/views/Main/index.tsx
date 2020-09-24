import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTheme } from 'ducks/theme/selectors';
import { GlobalStyle } from 'styled/GlobalStyle';
import { FlexWrapper } from './styled';
import Sheet from '../Character/Sheet';

const Main: React.FC = () => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FlexWrapper>
        <Sheet />
      </FlexWrapper>
    </ThemeProvider>
  );
};

export default Main;
