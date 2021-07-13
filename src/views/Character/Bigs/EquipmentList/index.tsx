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
  Padding,
} from './styled';

type Props = {
  content: Small[];
  header: Message;
};

const EquipmentList = ({ content, header }: Props) => {
  return (
    <FlexWrapper>
      <Padding>
        <HeaderWrapper>
          <FormattedHTMLMessage id={header.id} values={header.values} />
        </HeaderWrapper>
        <ListWrapper>
          {content.map(({ title, description }, index) => (
            <SmallWrapper key={`${title.id}-${index}`}>
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

export default EquipmentList;
