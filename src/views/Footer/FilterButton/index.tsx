import React, { useState } from 'react';
import { FlexWrapper, StyledButton } from './styled';
import Section from './Section';
import { classAttributions, contentAttributions } from 'rng/attributions';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import { updateFilter } from 'ducks/filter/actions';
import { selectClassIds } from 'ducks/filter/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderLabelWrapper, Header, useStyles } from "./Section/styled";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Filter = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const classIds = useSelector(selectClassIds);
  const styles = useStyles();

  const handleUpdateFilter = (updated: string[]) => {
    dispatch(updateFilter(updated));
  };

  return (
    <FlexWrapper>
      <StyledButton onClick={() => setOpen(!open)}>
        Who is responsible?
      </StyledButton>
      <Drawer anchor='top' open={open} onClose={() => setOpen(!open)}>
          <Grid container>
              <Grid item xs={12}>
                  <Header>
                      <HeaderLabelWrapper>
                          Who is truly to blame?
                      </HeaderLabelWrapper>
                      <IconButton className={styles.closeButton} onClick={() => setOpen(false)} aria-label="close-class-list">
                          <CloseIcon />
                      </IconButton>
                  </Header>
              </Grid>
              <Grid item md={5} xs={12}>
                  <Section
                      selected={classIds}
                      updateFn={handleUpdateFilter}
                      updateAllFn={handleUpdateFilter}
                      label='Classes'
                      attributions={classAttributions}
                  />
              </Grid>
              <Grid item md={5} xs={12}>
                  <Section
                      label='Additional content'
                      attributions={contentAttributions}
                  />
              </Grid>
          </Grid>

      </Drawer>
    </FlexWrapper>
  );
};

export default Filter;
