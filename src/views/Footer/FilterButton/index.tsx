import React, { useState } from 'react';
import { FlexWrapper, StyledButton } from './styled';
import Section from './Section';
import { classAttributions, contentAttributions } from 'rng/attributions';
import Drawer from '@material-ui/core/Drawer';

const Filter = () => {
  const [open, setOpen] = useState(false);

  return (
    <FlexWrapper>
      <StyledButton onClick={() => setOpen(!open)}>
        Who is responsible?
      </StyledButton>
      <Drawer anchor='top' open={open} onClose={() => setOpen(!open)}>
        <Section label='Classes' attributions={classAttributions} />
        <Section
          label='Additional content'
          attributions={contentAttributions}
        />
      </Drawer>
    </FlexWrapper>
  );
};

export default Filter;
