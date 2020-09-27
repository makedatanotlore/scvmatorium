import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FlexWrapper } from './styled';
import Header from '../Header';
import Sheet from '../Character/Sheet';
import { themes } from 'themes';

const Print: React.FC = () => {
  return (
    <ThemeProvider theme={themes.print}>
      <FlexWrapper>
        <Header print={true} />
        <Sheet />
      </FlexWrapper>
    </ThemeProvider>
  );
};

export default Print;
