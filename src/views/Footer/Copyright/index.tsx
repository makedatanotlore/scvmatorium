import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FlexWrapper } from './styled';

export const Copyright: React.FC = () => {
  return (
    <FlexWrapper>
      <FormattedMessage id={'app.copyright'} />
    </FlexWrapper>
  );
};

export default Copyright;
