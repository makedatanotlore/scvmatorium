import React from 'react';
import { Attribution } from 'types/character';
import { FormattedHTMLMessage, useIntl } from 'react-intl';
import { FlexWrapper, Header, AttributionWrapper } from './styled';

type Props = {
  label: string;
  attributions: Attribution[];
};

const Section = ({ label, attributions }: Props) => {
  const { formatMessage } = useIntl();

  return (
    <FlexWrapper>
      <Header>{label}</Header>
      {attributions.map((attribution) => {
        const title = formatMessage(attribution.title);

        return (
          <AttributionWrapper key={attribution.id}>
            <FormattedHTMLMessage
              id='app.attribution'
              values={{
                title,
                url: attribution.url,
              }}
            />
            {attribution.authors.map((author, index) => (
              <FormattedHTMLMessage
                key={author.name}
                id='app.author'
                values={{
                  url: author.url,
                  name: author.name,
                }}
              />
            ))}
          </AttributionWrapper>
        );
      })}
    </FlexWrapper>
  );
};

export default Section;
