import React from 'react';
import { FormattedHTMLMessage, useIntl } from 'react-intl';
import { Small, Message } from 'types/character';
import { FlexWrapper, HeaderWrapper } from './styled';

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
      <HeaderWrapper>
        <FormattedHTMLMessage id={header.id} values={header.values} />
      </HeaderWrapper>
      {otherStuff.map((small) => (
        <p key={small.description.id}>
          <FormattedHTMLMessage
            id={small.description.id}
            values={small.description.values}
          />
        </p>
      ))}
      <p>
        <FormattedHTMLMessage
          id={traitOne.title.id}
          values={{
            traitOne: formatMessage({ ...traitOne.description }),
            traitTwo: formatMessage({ ...traitTwo.description }).toLowerCase(),
          }}
        />{' '}
        {bodiesAndHabits.map((small) => (
          <span key={small.description.id}>
            <FormattedHTMLMessage
              id={small.description.id}
              values={small.description.values}
            />{' '}
          </span>
        ))}
      </p>
    </FlexWrapper>
  );
};

export default Introduction;
