
import { max } from 'lodash/fp';
import { wargear as attribution } from 'rng/attributions';
import { equipmentEntry } from 'rng/shared/entries';

const entryFn = (x: string) => equipmentEntry(attribution, x, ({ presence }) => ({
  // We use a generic 'ammo' field for 10+ arrows, bolts, stones, etc.
  // Other low-count projectiles like throwing axes use a hard-coded count
  // in the description.
  ammo: max([10 + presence, 1])!,
}));

export const d2Weapons = [
  'blowgun',
  'bola',
  'bullwhip',
  'hairPin',
  'letterOpener',
].map(entryFn);

export const d4Weapons = [
  'atlatl',
  'ballPeenHammer',
  'blackjack',
  'boomerang',
  'brassKnuckles',
  'broomHandle',
  'candlestick',
  'catONineTails',
  'cestus',
  'dart',
  'epee',
  'fryingPan',
  'gladius',
  'handCrossbow',
  'javelin',
  'kama',
  'kukri',
  'machete',
  'metalClaws',
  'nightstick',
  'penknife',
  'punchKnife',
  'rapier',
  'razor',
  'rustySword',
  'scalpel',
  'sharpenedStick',
  'shovel',
  'shuriken',
  'sickle',
  'slingshot',
  'throwingKnife',
].map(entryFn);

export const d6Weapons = [
  'assegai',
  'boatpaddle',
  'broadaxe',
  'cudgel',
  'cutlass',
  'falchion',
  'katana',
  'lightCrossbow',
  'militaryFork',
  'pilum',
  'recurveBow',
  'sabre',
  'scimitar',
  'shillelagh',
  'spear',
  'tomahawk',
  'trident',
  'horsemansPick',
  'warclub',
].map(entryFn);

export const d8Weapons = [
  'billhook',
  'estoc',
  'glaive',
  'lance',
  'maul',
  'pike',
  'scythe',
  'voulge',
].map(entryFn);

export const d10Weapons = [
  'claymore',
  'executionersAxe',
  'flamberge',
  'greatsword',
  'halberd',
].map(entryFn);

