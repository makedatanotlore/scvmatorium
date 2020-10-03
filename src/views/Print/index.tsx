import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { FlexWrapper, Footer } from './styled';
import Header from '../Header';
import Sheet from '../Character/Sheet';
import { themes } from 'themes';

const Print: React.FC = () => {
  return (
    <ThemeProvider theme={themes.print}>
      <FlexWrapper>
        <Header print={true} />
        <Sheet />
        <Footer>
          <FormattedHTMLMessage id='app.copyright' />
          <span>
            <FormattedHTMLMessage id='app.version' /> -{' '}
            <FormattedHTMLMessage id='app.url' />
          </span>
        </Footer>
      </FlexWrapper>
    </ThemeProvider>
  );
};

export default Print;
