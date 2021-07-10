import React, { useState } from 'react';
import { FlexWrapper, StyledButton } from './styled';
import Section from './Section';
import { classAttributions, contentAttributions } from 'rng/attributions';
import Drawer from '@material-ui/core/Drawer';
import { updateFilter } from 'ducks/filter/actions';
import { selectClassIds } from 'ducks/filter/selectors';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const classIds = useSelector(selectClassIds);

  const handleUpdateFilter = (updated: string[]) => {
    dispatch(updateFilter(updated));
  };

  return (
    <FlexWrapper>
      <StyledButton onClick={() => setOpen(!open)}>
        Who is responsible?
      </StyledButton>
      <Drawer anchor='top' open={open} onClose={() => setOpen(!open)}>
        <Section
          selected={classIds}
          updateFn={handleUpdateFilter}
          updateAllFn={handleUpdateFilter}
          closeFn={() => setOpen(false)}
          label='Classes'
          attributions={classAttributions}
        />
        <Section
          label='Additional content'
          attributions={contentAttributions}
        />
      </Drawer>
    </FlexWrapper>
  );
};

export default Filter;
