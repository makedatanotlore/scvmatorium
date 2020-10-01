import React from 'react';
import { Big } from 'types/character';
import AbilityList from './AbilityList';
import EquipmentList from './EquipmentList';
import Introduction from './Introduction';
import PlainBox from './PlainBox';
import { FlexWrapper } from './styled';

type Props = {
  content: Big[];
};

const Bigs = ({ content }: Props) => {
  const getComponent = (big: Big) => {
    switch (big.component.id) {
      case 'abilityList':
        return <AbilityList header={big.header} content={big.content} />;
      case 'equipmentList':
        return <EquipmentList header={big.header} content={big.content} />;
      case 'introduction':
        return <Introduction header={big.header} content={big.content} />;
      case 'plainBox':
        return <PlainBox header={big.header} content={big.content} />;
      default:
        return <></>;
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
