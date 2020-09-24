import { sample } from 'lodash/fp';
import tables from 'rng/tables';
import { TableEntry, Small } from 'types/character';

export const formatEquipment = ({
  content,
  generateValues,
}: TableEntry): Small => {
  const { title, description } = content as Small;
  const values = generateValues ? generateValues() : {};

  return {
    title: { ...title, values },
    description: { ...description, values },
  };
};

export const rollStandardEquipment = () => [
  formatEquipment(sample(tables.equipment.listI)!),
];
