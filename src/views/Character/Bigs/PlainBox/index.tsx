import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Small, Message } from 'types/character';
import { FlexWrapper, HeaderWrapper } from './styled';

type Props = {
  content: Small[];
  header: Message;
};

const PlainBox = ({ content, header }: Props) => {
  return (
    <FlexWrapper>
      <HeaderWrapper>
        <FormattedHTMLMessage id={header.id} values={header.values} />
      </HeaderWrapper>
      {content.map((small) => (
        <p key={small.description.id}>
          <FormattedHTMLMessage
            id={small.description.id}
            values={small.description.values}
          />
        </p>
      ))}
    </FlexWrapper>
  );
};

export default PlainBox;
