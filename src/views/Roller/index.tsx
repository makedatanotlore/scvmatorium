import React, { useEffect, useState } from 'react';
import { random, sample } from 'lodash/fp';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedHTMLMessage } from 'react-intl';
import { FlexWrapper, StyledButton, StyledText, ButtonWrapper } from './styled';
import { setCharacter } from 'ducks/character/actions';
import { selectClassIds } from 'ducks/filter/selectors';
import { updateFilter } from "../../ducks/filter/actions";
import { classes } from 'rng/classes';
import { classless } from 'rng/classes/classless';

const Roller = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(`app.reroll.1`);
  const classIds = useSelector(selectClassIds);
  const urlParams = new URLSearchParams(window.location.search);
  const classesFromURL = urlParams.get("classes");

  useEffect(() => {
    if (classesFromURL?.length){
      dispatch(updateFilter(classIds.filter((id: string) => classesFromURL.includes(id))));
    }
    // eslint-disable-next-line
  }, [classesFromURL])

  useEffect(() => {
      updateCharacter();
    // eslint-disable-next-line
  }, [classIds])

  const updateCharacter = () => {
    if (!classIds.length) {
      dispatch(setCharacter(classless()));
    }
    else {
      const availableClasses = Object.entries(classes)
          .filter(([id]) => classIds.includes(id))
          .map(([id, value]) => value);
      dispatch(setCharacter(sample(availableClasses)!()));
    }
    setMessage(`app.reroll.${random(1, 30)}`);
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
