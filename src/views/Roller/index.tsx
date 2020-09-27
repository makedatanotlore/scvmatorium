import React, { useState } from 'react';
import { random } from 'lodash/fp';
import { useDispatch } from 'react-redux';
import { FormattedHTMLMessage } from 'react-intl';
import { FlexWrapper, StyledButton } from './styled';
import { setCharacter } from 'ducks/character/actions';
import { classless } from 'rng/classes/classless';

const Roller = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(`app.reroll.1`);

  const updateCharacter = () => {
    dispatch(setCharacter(classless()));
    setMessage(`app.reroll.${random(1, 20)}`);
  };

  return (
    <FlexWrapper>
      <StyledButton onClick={updateCharacter}>
        <FormattedHTMLMessage id={message} />
      </StyledButton>
    </FlexWrapper>
  );
};

export default Roller;
