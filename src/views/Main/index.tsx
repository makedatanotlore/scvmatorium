import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTheme } from 'ducks/theme/selectors';
import { GlobalStyle } from 'styled/GlobalStyle';
import { FlexWrapper } from './styled';
import Header from '../Header';
import Roller from '../Roller';
import Footer from '../Footer';
import Sheet from '../Character/Sheet';

const Main: React.FC = () => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FlexWrapper>
        <Header />
        <Roller />
        <Sheet />
        <Footer />
      </FlexWrapper>
    </ThemeProvider>
  );
};

export default Main;
