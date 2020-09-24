import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Small } from 'types/character';
import {
  FlexWrapper,
  SmallWrapper,
  TitleWrapper,
  DescriptionWrapper,
} from './styled';

type Props = {
  content: Small[];
};

const Smalls = ({ content }: Props) => {
  return (
    <FlexWrapper>
      {content.map(({ title, description }, index) => (
        <SmallWrapper key={`stat-${index}`}>
          <TitleWrapper>
            <FormattedHTMLMessage id={title.id} values={title.values} />
          </TitleWrapper>
          <DescriptionWrapper>
            <FormattedHTMLMessage
              id={description.id}
              values={description.values}
            />
          </DescriptionWrapper>
        </SmallWrapper>
      ))}
    </FlexWrapper>
  );
};

export default Smalls;
