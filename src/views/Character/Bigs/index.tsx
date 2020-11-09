import React from 'react';
import { Big } from 'types/character';
import AbilityList from './AbilityList';
import EquipmentList from './EquipmentList';
import Introduction from './Introduction';
import PlainBox from './PlainBox';
import HalfBox from './HalfBox';
import Table from './Table';
import { FlexWrapper } from './styled';

type Props = {
  content: Big[];
};

const Bigs = ({ content }: Props) => {
  const getComponent = (big: Big) => {
    switch (big.component.id) {
      case 'abilityList':
        return (
          <AbilityList
            key={`${big.header.id}`}
            header={big.header}
            content={big.content}
          />
        );
      case 'equipmentList':
        return (
          <EquipmentList
            key={`${big.header.id}`}
            header={big.header}
            content={big.content}
          />
        );
      case 'introduction':
        return (
          <Introduction
            key={`${big.header.id}`}
            header={big.header}
            content={big.content}
          />
        );
      case 'plainBox':
        return (
          <PlainBox
            key={`${big.header.id}`}
            header={big.header}
            content={big.content}
          />
        );
      case 'halfBox':
        return (
          <HalfBox
            key={`${big.header.id}`}
            header={big.header}
            content={big.content}
          />
        );
      case 'table':
        return (
          <Table
            key={`${big.header.id}`}
            header={big.header}
            content={big.content}
          />
        );
      default:
        return <></>;
    }
  };

  return <FlexWrapper>{content.map((big) => getComponent(big))}</FlexWrapper>;
};

export default Bigs;
