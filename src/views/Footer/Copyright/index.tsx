import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { FlexWrapper } from './styled';

export const Copyright: React.FC = () => {
  return (
    <FlexWrapper>
      <FormattedHTMLMessage id={'app.copyright'} />
    </FlexWrapper>
  );
};

export default Copyright;
