import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Small, Message } from 'types/character';
import { FlexWrapper, HeaderWrapper, Padding, StyledText } from './styled';

type Props = {
  content: Small[];
  header: Message;
};

const PlainBox = ({ content, header }: Props) => {
  return (
    <FlexWrapper>
      <Padding>
        <HeaderWrapper>
          <FormattedHTMLMessage id={header.id} values={header.values} />
        </HeaderWrapper>
        {content.map((small, index) => (
          <StyledText key={`${small.description.id}-${index}`}>
            <FormattedHTMLMessage
              id={small.description.id}
              values={small.description.values}
            />
          </StyledText>
        ))}
      </Padding>
    </FlexWrapper>
  );
};

export default PlainBox;
