import { equipment as scvmatoriumEquipment } from 'rng/makedatanotlore/scvmatorium/equipment';
import { scvmatorium } from 'rng/attributions';
import { TableEntry } from 'types/character';

const blankEntry = (): TableEntry => ({
  id: `blank`,
  tags: ['blank'],
  attribution: scvmatorium,
  content: {
    tags: ['blank'],
    title: {
      id: ``,
      values: {},
    },
    description: {
      id: ``,
      values: {},
    },
  },
});

export const foodAndWater = [...scvmatoriumEquipment.foodAndWater];
export const monies = [...scvmatoriumEquipment.monies];
export const listI = [
  blankEntry(),
  blankEntry(),
  ...scvmatoriumEquipment.listI,
];
export const listII = [...scvmatoriumEquipment.listII];
export const listIII = [...scvmatoriumEquipment.listIII];
export const weapons = {
  d4: [...scvmatoriumEquipment.weapons.d4],
  d6: [...scvmatoriumEquipment.weapons.d6],
  d8: [...scvmatoriumEquipment.weapons.d8],
  d10: [...scvmatoriumEquipment.weapons.d10],
};

export const armor = {
  d2: [blankEntry(), ...scvmatoriumEquipment.armor.d2],
  d3: [blankEntry(), ...scvmatoriumEquipment.armor.d3],
  d4: [blankEntry(), ...scvmatoriumEquipment.armor.d4],
};

export default {
  foodAndWater,
  listI,
  listII,
  listIII,
  weapons,
  armor,
  monies,
};
