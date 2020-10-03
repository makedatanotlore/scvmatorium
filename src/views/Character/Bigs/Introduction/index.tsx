import React from 'react';
import { FormattedHTMLMessage, useIntl } from 'react-intl';
import { Small, Message } from 'types/character';
import {
  FlexWrapper,
  HeaderWrapper,
  Padding,
  BodyWrapper,
  OtherWrapper,
} from './styled';

type Props = {
  content: Small[];
  header: Message;
};

const Introduction = ({ content, header }: Props) => {
  const { formatMessage } = useIntl();
  const [traitOne, traitTwo] = content.filter((small) =>
    small.tags.includes('trait')
  );
  const bodiesAndHabits = content.filter(
    (small) => small.tags.includes('body') || small.tags.includes('habit')
  );
  const otherStuff = content.filter(
    (small) =>
      !small.tags.includes('trait') &&
      !small.tags.includes('body') &&
      !small.tags.includes('habit')
  );

  return (
    <FlexWrapper>
      <Padding>
        <HeaderWrapper>
          <FormattedHTMLMessage id={header.id} values={header.values} />
        </HeaderWrapper>
        {otherStuff.map((small) => (
          <OtherWrapper key={small.description.id}>
            <FormattedHTMLMessage
              id={small.description.id}
              values={small.description.values}
            />
          </OtherWrapper>
        ))}
        <p>
          <FormattedHTMLMessage
            id={traitOne.title.id}
            values={{
              traitOne: formatMessage({ ...traitOne.description }),
              traitTwo: formatMessage({
                ...traitTwo.description,
              }).toLowerCase(),
            }}
          />{' '}
          {bodiesAndHabits.map((small) => (
            <BodyWrapper key={small.description.id}>
              <FormattedHTMLMessage
                id={small.description.id}
                values={small.description.values}
              />{' '}
            </BodyWrapper>
          ))}
        </p>
      </Padding>
    </FlexWrapper>
  );
};

export default Introduction;
