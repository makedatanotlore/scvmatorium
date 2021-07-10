import { max, sample } from 'lodash/fp';
import { d444Weapons as attribution } from 'rng/attributions';
import { equipmentEntry } from 'rng/shared/entries';
import { rollD } from 'rng/shared/roll';
import { TableEntry } from 'types/character';

// Lutov's original roll-table is d444, or d44+100 if you begin with a scroll.
// However, all our existing classes use rollWeapon(num).
//
// In the core book, the weapons roll (1d10 or less) maps to 
// weapons of certain damages, like so:
// 1-4: d4
// 5-7: d6
// 8-9: d8
// 10: d10
/*
const rollD444Weapons = (dieNum: number): TableEntry => {
  if (dieNum === 10) {
    // vanilla, classless die roll
  }

  const roll = rollD(dieNum);
  let weapons;
  if (roll == 1) {
    weapons = d2Weapons;
  } else if (roll <= 4) {
    weapons = d4Weapons;
  } else if (roll <= 7) {
    weapons = d6Weapons;
  } else if (roll <= 9) {
    weapons = d6Weapons;
  } else {
    // 10
    weapons = d10Weapons;
  }
  return sample(weapons)!;
};
*/

export const rollD444Weapons = (dieNum: number, scroll: boolean): TableEntry => {
  if (dieNum === 10) {
    // vanilla, classless die roll

    // d44 - 11-44, 16 entries
    // d444 = 111-444, aka all entries
    if (scroll) {
      // d44 + 100 = 111-144, aka entries 0-15 (the first 16)
      return sample(d444Weapons.slice(0, 15))!;
    }
    return sample(d444Weapons)!;
  }

  // TODO
  return sample(d444Weapons)!;
}

// roll d444 for a weapon. If you begin with a scroll, roll d44+100.

export const d444Weapons = [
  // 111 - 144. Non-lethal. Test Strength to attack.
  'fist',
  'stick',
  'torch',
  'whip',

  'deadMansHand',
  'hammer',
  'fightingGlove',
  'brassKnuckles',

  'femur',
  'lash',
  'crowbar',
  'staff',

  'pegleg',
  'club',
  'knout',
  'scepter',

  // 211-244. Pierce/cutting. Test Strength or Agility to attack.
  'scissors',
  'knife',
  'dagger',
  'shortsword',

  'meathook',
  'spear',
  'steelClaws',
  'armingSword',

  'scythe',
  'pike',
  'estoc',
  'lance',

  'falchion',
  'sabre',
  'rapier',
  'grosseMesser',

  // 311-344. Ranged. Test Presence to attack. Add Presence to the number of arrows, bolts, etc.
  'stones',
  'darts',
  'arrows',
  'sling',

  'slingshot',
  'staffSling',
  'blowgun',
  'shortbow',

  'throwingAxes',
  'amentum',
  'lightCrossbow',
  'bow',

  'handCannon',
  'longbow',
  'crossbow',
  'culverin',

  // 411-444. Crushing/slashing. Test Strength to attack. Attacks ignore one armor tier, +1 damage to an unarmored foe.
  'boardWithNails',
  'axe',
  'mace',
  'morningstar',

  'shovel',
  'bardiche',
  'claymore',
  'warhammer',

  'warCleaver',
  'broadsword',
  'oneHandedFlail',
  'warAxe',

  'warScythe',
  'flail',
  'halberd',
  'zweihander',
].map((x) => equipmentEntry(attribution, x, ({ presence }) => ({
      ammo: max([10 + presence, 1])!,
})));

export const d2NonLethal = [
  'fist',
  'stick',
  'torch',
  'whip',
  'deadMansHand',
  'hammer',
  'fightingGlove',
  'brassKnuckles',
];

export const d4NonLethal = [
  'femur',
  'lash',
  'crowbar',
  'staff',
];

export const d6NonLethal = [
  'pegleg',
  'club',
  'knout',
  'scepter',
];

export const d4PiercingCutting = [
  'scissors',
  'knife',
  'dagger',
  'shortsword',
];

export const d6PiercingCutting = [
  'meathook',
  'spear',
  'steelClaws',
  'armingSword',
];

export const d8PiercingCutting = [
  'scythe',
  'pike',
  'estoc',
  'lance',
];

// actually 2d4-1, but whatever
export const d10PiercingCutting = [
  'falchion',
  'sabre',
  'rapier',
  'grosseMesser',
];

export const d2Ranged = [
  'stones',
  'darts',
  'arrows',
  'sling'
];

export const d4Ranged = [
  'slingshot',
  'staffSling',
  'blowgun',
  'shortbow',
];

export const d6Ranged = [
  'throwingAxes',
  'amentum',
  'lightCrossbow',
  'bow',
];

export const d8Ranged = [
  'handCannon',
  'longbow',
  'crossbow',
  'culverin',
];

export const d4CrushingSlashing = [
  'boardWithNails',
  'axe',
  'mace',
  'morningstar',
];

export const d6CrushingSlashing = [
  'shovel',
  'bardiche',
  'claymore',
  'warhammer',
];

export const d8CrushingSlashing = [
  'warCleaver',
  'broadsword',
  'oneHandedFlail',
  'warAxe',
];

export const d10CrushingSlashing = [
  'warScythe',
  'flail',
  'halberd',
  'zweihander',
];

export const d2Weapons = [
  d2NonLethal,
  d2Ranged,
];

export const d4Weapons = [
  ...d4NonLethal,
  ...d4PiercingCutting,
  ...d4Ranged,
  ...d4CrushingSlashing,
];

export const d6Weapons = [
  ...d6NonLethal,
  ...d6PiercingCutting,
  ...d6Ranged,
  ...d6CrushingSlashing,
];

export const d8Weapons = [
  ...d8Ranged,
  ...d8PiercingCutting,
  ...d8CrushingSlashing,
];

export const d10Weapons = [
  ...d10PiercingCutting,
  ...d10CrushingSlashing,
];

//.map((x) => entry(feat));