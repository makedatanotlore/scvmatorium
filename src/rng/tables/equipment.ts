import { equipment as scvmatoriumEquipment } from 'rng/makedatanotlore/scvmatorium/equipment';

const bags = {
  small: [...scvmatoriumEquipment.bags.small],
  large: [...scvmatoriumEquipment.bags.large],
  vehicle: [...scvmatoriumEquipment.bags.vehicle],
  beast: [...scvmatoriumEquipment.bags.beast],
};

export const foodAndWater = [...scvmatoriumEquipment.foodAndWater];
export const silver = [...scvmatoriumEquipment.silver];
export const general = [...scvmatoriumEquipment.general];
export const weapons = {
  d4: [...scvmatoriumEquipment.weapons.d4],
  d6: [...scvmatoriumEquipment.weapons.d6],
  d8: [...scvmatoriumEquipment.weapons.d8],
  d10: [...scvmatoriumEquipment.weapons.d10],
};

export const armor = {
  light: [...scvmatoriumEquipment.armor.light],
  medium: [...scvmatoriumEquipment.armor.medium],
  heavy: [...scvmatoriumEquipment.armor.heavy],
};

export default {
  foodAndWater,
  bags,
  general,
  weapons,
  armor,
  silver,
};
