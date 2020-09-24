import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Small, Message } from 'types/character';
import {
  FlexWrapper,
  SmallWrapper,
  TitleWrapper,
  DescriptionWrapper,
  ListWrapper,
  HeaderWrapper,
} from './styled';

type Props = {
  content: Small[];
  header: Message;
};

const EquipmentList = ({ content, header }: Props) => {
  return (
    <FlexWrapper>
      <HeaderWrapper>
        <FormattedHTMLMessage id={header.id} values={header.values} />
      </HeaderWrapper>
      <ListWrapper>
        {content.map(({ title, description }) => (
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
    </FlexWrapper>
  );
};

export default EquipmentList;
