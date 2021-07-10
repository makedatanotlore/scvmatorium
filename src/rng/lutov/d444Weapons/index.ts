import { max, sample } from 'lodash/fp';
import { d444Weapons as attribution } from 'rng/attributions';
import { equipmentEntry } from 'rng/shared/entries';
import { rollD } from 'rng/shared/roll';
import { TableEntry } from 'types/character';

export const d444Weapons = () => {
  // placeholder
};

export const rollD444Weapons = (dieNum: number): TableEntry => {
  // Lutov's original roll-table is d444 or d44+100 if you begin with a scroll.
  // However, all our existing classes use rollWeapon(num) and many 3p classes
  // specify a lower weapon die... so we use a custom rolling method to make
  // d444Weapons play nicely with that.
  // In the core book, the weapons roll (1d10 or less) maps to weapons of
  // certain damages, like so: 1-4: d4, 5-7: d6, 8-9: d8, 10: d10.
  // d444Weapons adds even lower/crappier d2 weapons, so we steal roll result
  // 1 for those.
  let weapons;
  const roll = rollD(dieNum);  // we assume 1 <= dieNum <= 10
  if (roll === 1) {
    weapons = d2Weapons;
  } else if (roll <= 4) {
    weapons = d4Weapons;
  } else if (roll <= 7) {
    weapons = d6Weapons;
  } else if (roll <= 9) {
    weapons = d8Weapons;
  } else {
    weapons = d10Weapons;
  }
  return sample(weapons)!;
};

const entryFn = (x: string) => equipmentEntry(attribution, x, ({ presence }) => ({
  // We use a generic 'ammo' field for 10+ arrows, bolts, stones, etc.
  // Other low-count projectiles like throwing axes use a hard-coded count
  // in the description.
  ammo: max([10 + presence, 1])!,
}));

export const d2NonLethal = [
  'fist',
  'stick',
  'torch',
  'whip',
  'deadMansHand',
  'hammer',
  'fightingGlove',
  'brassKnuckles',
].map(entryFn);

export const d4NonLethal = [
  'femur',
  'lash',
  'crowbar',
  'staff',
].map(entryFn);

export const d6NonLethal = [
  'pegleg',
  'club',
  'knout',
  'scepter',
].map(entryFn);

export const d4PiercingCutting = [
  'scissors',
  'knife',
  'dagger',
  'shortsword',
].map(entryFn);

export const d6PiercingCutting = [
  'meathook',
  'spear',
  'steelClaws',
  'armingSword',
].map(entryFn);

export const d8PiercingCutting = [
  'scythe',
  'pike',
  'estoc',
  'lance',
].map(entryFn);

// actually 2d4-1 dmg, but whatever
export const d10PiercingCutting = [
  'falchion',
  'sabre',
  'rapier',
  'grosseMesser',
].map(entryFn);

export const d2Ranged = [
  'stones',
  'darts',
  'arrows',
  'sling'
].map(entryFn);

export const d4Ranged = [
  'slingshot',
  'staffSling',
  'blowgun',
  'shortbow',
].map(entryFn);

export const d6Ranged = [
  'throwingAxes',
  'amentum',
  'lightCrossbow',
  'bow',
].map(entryFn);

export const d8Ranged = [
  'handCannon',
  'longbow',
  'crossbow',
  'culverin',
].map(entryFn);

export const d4CrushingSlashing = [
  'boardWithNails',
  'axe',
  'mace',
  'morningstar',
].map(entryFn);

export const d6CrushingSlashing = [
  'shovel',
  'bardiche',
  'claymore',
  'warhammer',
].map(entryFn);

export const d8CrushingSlashing = [
  'warCleaver',
  'broadsword',
  'oneHandedFlail',
  'warAxe',
].map(entryFn);

export const d10CrushingSlashing = [
  'warScythe',
  'flail',
  'halberd',
  'zweihander',
].map(entryFn);

export const d2Weapons = [
  ...d2NonLethal,
  ...d2Ranged,
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
