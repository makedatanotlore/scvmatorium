import { sample, sampleSize, random } from 'lodash/fp';
import tables from 'rng/tables';
import { uncredited } from 'rng/attributions';
import { d2Weapons, d4Weapons, d6Weapons, d8Weapons, d10Weapons } from 'rng/mcglintlock/wargear';
import { Big, GenerateValuesProps, Small, TableEntry } from 'types/character';

export const formatEquipmentList = (equipment: TableEntry[], presenceScore: number, silverRange: {min: number, max: number}): Big => ({
  component: { id: 'equipmentList' },
  header: { id: 'character.stats.titles.equipment', values: {} },
  content: equipment
    .filter((item) => item.id !== '_blank')
    .map((item) =>
      formatEquipment(item, {
        presence: presenceScore,
        money: silverRange,
      })
    )
});

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

export const hasScroll = (equipment: TableEntry[]) =>
  equipment.some(
    (item) =>
      item.tags.includes('uncleanScroll') || item.tags.includes('sacredScroll')
  );

export const sharedEntry = (id: string): TableEntry => ({
  id: `${id}`,
  tags: [id],
  attribution: uncredited,
  content: {
    tags: [`${id}`],
    title: {
      id: `content.shared.uncredited.${id}.title`,
      values: {},
    },
    description: {
      id: `content.shared.uncredited.${id}.description`,
      values: {},
    },
  },
});

export const blankEntry = (): TableEntry => ({
  id: `_blank`,
  tags: [],
  attribution: uncredited,
  content: {
    tags: [],
    title: {
      id: `content.shared.uncredited.blank`,
      values: {},
    },
    description: {
      id: `content.shared.uncredited.blank`,
      values: {},
    },
  },
});

const rollBags = (): TableEntry => {
  const roll = random(0, 5);

  return [
    blankEntry(),
    blankEntry(),
    sample(tables.equipment.bags.small)!,
    sample(tables.equipment.bags.large)!,
    sample([
      sample([...tables.equipment.bags.large, ...tables.equipment.bags.small])!,
      sample(tables.equipment.bags.vehicle)!,
    ])!,
    sample([
      sample([
        ...tables.equipment.bags.large,
        ...tables.equipment.bags.small,
        ...tables.equipment.bags.vehicle,
      ])!,
      sample(tables.equipment.bags.beast),
    ])!,
  ][roll];
};

export const rollArmor = (armor: number, scroll: boolean): TableEntry => {
  const roll = random(0, scroll ? 1 : armor - 1);

  return [
    blankEntry(),
    sample(tables.equipment.armor.light)!,
    sample(tables.equipment.armor.medium)!,
    sample(tables.equipment.armor.heavy)!,
  ][roll];
};

export const rollWeapon = (weapon: number): TableEntry => {
  const roll = random(0, weapon - 1);

  const d4 = [...tables.equipment.weapons.d4, ...d2Weapons, ...d4Weapons];
  const d6 = [...tables.equipment.weapons.d6, ...d6Weapons];
  const d8 = [...tables.equipment.weapons.d8, ...d8Weapons];
  const d10 = [...tables.equipment.weapons.d10, ...d10Weapons];

  return [
    sample(d4)!,
    sample(d4)!,
    sample(d4)!,
    sample(d4)!,
    sample(d6)!,
    sample(d6)!,
    sample(d8)!,
    sample(d8)!,
    sample(d10)!,
    sample(d10)!,
  ][roll];
};

export const rollSilver = () => {
  return sample(tables.equipment.silver)!;
};

export const rollFoodAndWater = () => {
  return sample(tables.equipment.foodAndWater)!;
};

export const rollStandardEquipment = (includeScrolls = true) => {
  const equipmentList = [
    ...sampleSize(21, tables.equipment.general),
    sharedEntry('shield'),
  ];
  if (includeScrolls) {
    equipmentList.push(
      sharedEntry('uncleanScroll'), sharedEntry('sacredScroll'));
  }
  const generalEquipment = sampleSize(3, equipmentList)!;

  const bags = rollBags();

  return [bags, ...generalEquipment]
    .map((item) =>
      item.id === 'shield' ? sample(tables.equipment.armor.shields)! : item
    )
    .filter((item) => item.id !== '_blank');
};
