import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FlexWrapper } from './styled';

export const Version: React.FC = () => {
  return (
    <FlexWrapper>
      <FormattedMessage id={'app.version'} />
    </FlexWrapper>
  );
};

export default Version;
