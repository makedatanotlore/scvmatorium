import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Small, Message } from 'types/character';
import {
  FlexWrapper,
  HeaderWrapper,
  ListWrapper,
  SmallWrapper,
  TitleWrapper,
  Padding,
  DescriptionWrapper,
} from './styled';

type Props = {
  content: Small[];
  header: Message;
};

const PlainBox = ({ content, header }: Props) => {
  const descriptions = content.filter((small) =>
    small.tags.includes('tableDescription')
  );
  const entries = content.filter((small) => small.tags.includes('tableEntry'));

  return (
    <FlexWrapper>
      <Padding>
        <HeaderWrapper>
          <FormattedHTMLMessage id={header.id} values={header.values} />
        </HeaderWrapper>
        {descriptions.map((small) => (
          <p key={small.description.id}>
            <FormattedHTMLMessage
              id={small.description.id}
              values={small.description.values}
            />
          </p>
        ))}
        <ListWrapper>
          {entries.map(({ title, description }) => (
            <SmallWrapper key={`${title.id}`}>
              <TitleWrapper>
                <FormattedHTMLMessage id={title.id} values={title.values} />
              </TitleWrapper>
              <DescriptionWrapper>
                {' '}
                <FormattedHTMLMessage
                  id={description.id}
                  values={description.values}
                />
              </DescriptionWrapper>
            </SmallWrapper>
          ))}
        </ListWrapper>
      </Padding>
    </FlexWrapper>
  );
};

export default PlainBox;
