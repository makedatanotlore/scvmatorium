import React, { useState } from 'react';
import { random, sample } from 'lodash/fp';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedHTMLMessage } from 'react-intl';
import { FlexWrapper, StyledButton, StyledText, ButtonWrapper } from './styled';
import { setCharacter } from 'ducks/character/actions';
import { selectClasses } from 'ducks/filter/selectors';

const Roller = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(`app.reroll.1`);
  const classes = useSelector(selectClasses);

  const updateCharacter = () => {
    dispatch(setCharacter(sample(classes)!()));
    setMessage(`app.reroll.${random(1, 20)}`);
  };

  return (
    <FlexWrapper>
      <ButtonWrapper>
        <StyledButton onClick={updateCharacter}>
          <FormattedHTMLMessage id={message} />
        </StyledButton>
        <StyledText>(and die)</StyledText>
      </ButtonWrapper>
    </FlexWrapper>
  );
};

export default Roller;
