import React, { useEffect, useState } from 'react';
import { Attribution } from 'types/character';
import clsx from 'clsx';
import { FormattedHTMLMessage, useIntl } from 'react-intl';
import { FlexWrapper, useStyles, ContentWrapper, HeaderLabelWrapper, Subheader } from './styled';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
  label: string;
  attributions: Attribution[];
  updateFn?: (updated: string[]) => void;
  updateAllFn?: (updated: string[]) => void;
  closeFn?: () => void;
  selected?: string[];
};

const Section = ({ label, attributions, updateFn, updateAllFn, selected = [] }: Props) => {
  const { formatMessage } = useIntl();
  const [allSelected, setAllSelected] = useState(attributions.map(({id}) => selected.includes(id) ).every((isSelected) => isSelected))
  const [someSelected, setSomeSelected] = useState(attributions.map(({id}) => selected.includes(id) ).some((isSelected) => isSelected))
  const styles = useStyles();

  useEffect(() => {
    setAllSelected(attributions.map(({id}) => selected.includes(id) ).every((isSelected) => isSelected))
    setSomeSelected(attributions.map(({id}) => selected.includes(id) ).some((isSelected) => isSelected))
  }, [attributions, selected])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (updateFn) {
      if (!event?.target?.checked) {
        updateFn(selected?.filter((id) => event.target.name !== id) || []);
      } else {
        updateFn([...(selected || []), event.target.name]);
      }
    }
  };

  const handleUpdateAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (updateAllFn) {
      if (!event?.target?.checked) {
        updateAllFn([]);
      } else {
        updateAllFn(attributions.map(({id}) => id));
      }
    }
  };

  return (
    <FlexWrapper>
      <Subheader>
        <HeaderLabelWrapper>
          {updateAllFn && <Checkbox
              disableRipple
              className={styles.root}
              icon={<span className={styles.icon} />}
              checkedIcon={
                <span className={clsx(styles.icon, styles.checkedIcon)} />
              }
              checked={allSelected}
              indeterminate={someSelected && !allSelected}
              indeterminateIcon={
                <span className={clsx(styles.icon, styles.indeterminateIcon)} />
              }
              onChange={handleUpdateAll}
              name={'select-all'}
          />}
          {label}
        </HeaderLabelWrapper>
      </Subheader>
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

              {attribution.authors.map((author) => (
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
