import React from 'react';
import { Big } from 'types/character';
import AbilityList from './AbilityList';
import EquipmentList from './EquipmentList';
import { FlexWrapper, BigWrapper } from './styled';

type Props = {
  content: Big[];
};

const Bigs = ({ content }: Props) => {
  const getComponent = (big: Big) => {
    switch (big.component) {
      case 'ability-list':
        return <AbilityList header={big.header} content={big.content} />;
      case 'equipment-list':
        return <EquipmentList header={big.header} content={big.content} />;
      default:
        return <>helloworld</>;
    }
  };

  return (
    <FlexWrapper>
      {content.map((big) => (
        <div key={`${big.header.id}`}>{getComponent(big)}</div>
      ))}
    </FlexWrapper>
  );
};

export default Bigs;
