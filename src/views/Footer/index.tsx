import React from 'react';
import { FlexWrapper, Menu } from './styled';
import Copyright from './Copyright';
import Version from './Version';
import PrintButton from './PrintButton';
import FilterButton from './FilterButton';

const Footer = () => {
  return (
    <FlexWrapper>
      <Menu>
        <FilterButton />
        <PrintButton />
      </Menu>
      <Copyright />
      <Version />
    </FlexWrapper>
  );
};

export default Footer;
