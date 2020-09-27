import React from 'react';
import { useSelector } from 'react-redux';
import { FlexWrapper } from './styled';
import Smalls from '../Smalls';
import Bigs from '../Bigs';
import { selectCharacter } from 'ducks/character/selectors';

const Sheet: React.FC = () => {
  const character = useSelector(selectCharacter);

  return (
    <FlexWrapper>
      <Smalls content={character.smalls} />
      <Bigs content={character.bigs} />
    </FlexWrapper>
  );
};

export default Sheet;
