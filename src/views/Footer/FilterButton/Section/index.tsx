import React from 'react';
import { Attribution } from 'types/character';
import clsx from 'clsx';
import { FormattedHTMLMessage, useIntl } from 'react-intl';
import { FlexWrapper, Header, useStyles, ContentWrapper } from './styled';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
  label: string;
  attributions: Attribution[];
  updateFn?: (updated: string[]) => void;
  selected?: string[];
};

const Section = ({ label, attributions, updateFn, selected }: Props) => {
  const { formatMessage } = useIntl();
  const styles = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (updateFn) {
      if (!event?.target?.checked) {
        updateFn(selected?.filter((id) => event.target.name !== id) || []);
      } else {
        updateFn([...(selected || []), event.target.name]);
      }
    }
  };

  return (
    <FlexWrapper>
      <Header>{label}</Header>
      {attributions.map((attribution) => {
        const title = formatMessage(attribution.title);

        return (
          <ContentWrapper key={attribution.id}>
            {updateFn && (
              <Checkbox
                disableRipple
                className={styles.root}
                icon={<span className={styles.icon} />}
                checkedIcon={
                  <span className={clsx(styles.icon, styles.checkedIcon)} />
                }
                checked={selected?.includes(attribution.id) || false}
                onChange={handleChange}
                name={attribution.id}
              />
            )}
            <span>
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
            </span>
          </ContentWrapper>
        );
      })}
    </FlexWrapper>
  );
};

export default Section;
