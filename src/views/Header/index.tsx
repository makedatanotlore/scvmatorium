import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { FlexWrapper, Logo, Subtitle } from './styled';
import logo from 'assets/scvmatorium.svg';
import printLogo from 'assets/scvmatorium_black.svg';

type Props = {
  print?: boolean;
};

const Header = ({ print = false }: Props) => {
  return (
    <FlexWrapper>
      <Logo src={print ? printLogo : logo} />
      <Subtitle>
        <FormattedHTMLMessage id='app.subtitle' />
      </Subtitle>
    </FlexWrapper>
  );
};

export default Header;
