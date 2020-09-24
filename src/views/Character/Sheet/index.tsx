import React from 'react';
import { FlexWrapper } from './styled';
import Smalls from '../Smalls';
import Bigs from '../Bigs';
import { roll } from 'rng/classes/classless';

const Sheet: React.FC = () => {
  const character = roll();

  return (
    <FlexWrapper>
      <Smalls content={character.smalls} />
      <Bigs content={character.bigs} />
    </FlexWrapper>
  );
};

export default Sheet;
