import { sample } from 'lodash/fp';
import tables from 'rng/tables';
import { TableEntry, Small, GenerateValuesProps } from 'types/character';

export const formatEquipment = (
  { content, generateValues }: TableEntry,
  input: GenerateValuesProps
): Small => {
  const { title, description, tags } = content as Small;
  const values = generateValues ? generateValues(input) : {};

  return {
    tags,
    title: { ...title, values },
    description: { ...description, values },
  };
};

const hasScroll = (equipment: TableEntry[]) =>
  equipment.some(
    (item) =>
      item.tags.includes('uncleanScroll') || item.tags.includes('sacredScroll')
  );

export const rollStandardEquipment = (input: GenerateValuesProps) => {
  const foodAndWater = sample(tables.equipment.foodAndWater)!;
  const equipmentI = sample(tables.equipment.listI)!;
  const equipmentII = sample(tables.equipment.listII)!;
  const equipmentIII = sample(tables.equipment.listIII)!;
  const armorDie = hasScroll([equipmentII, equipmentIII]) ? 'd2' : input.armor;

  const armor = sample(tables.equipment.armor[armorDie])!;
  const weapon = sample(tables.equipment.weapons[input.weapon])!;
  const monies = sample(tables.equipment.monies)!;

  return [
    foodAndWater,
    weapon,
    armor,
    equipmentI,
    equipmentII,
    equipmentIII,
    monies,
  ]
    .filter((item) => item.id !== 'blank')
    .map((item) => formatEquipment(item, input));
};
