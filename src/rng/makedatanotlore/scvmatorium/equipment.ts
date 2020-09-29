import { GenerateValuesFn } from 'types/character';
import { sample, random, max } from 'lodash/fp';
import { scvmatorium } from 'rng/attributions';
import { TableEntry } from 'types/character';

const entry = (id: string, generateValues?: GenerateValuesFn): TableEntry => ({
  id: `scvmatorium-${id}`,
  tags: ['makedatanotlore', 'scvmatorium', 'equipment', id],
  attribution: scvmatorium,
  content: {
    tags: ['makedatanotlore', 'scvmatorium', 'equipment', id],
    title: {
      id: `content.makedatanotlore.scvmatorium.${id}.title`,
      values: {},
    },
    description: {
      id: `content.makedatanotlore.scvmatorium.${id}.description`,
      values: {},
    },
  },
  generateValues,
});

const bagEntry = (
  id: string,
  size: 'small' | 'large',
  generateValues?: GenerateValuesFn
): TableEntry => ({
  id: `scvmatorium-${id}`,
  tags: ['makedatanotlore', 'scvmatorium', 'equipment', id],
  attribution: scvmatorium,
  content: {
    tags: ['makedatanotlore', 'scvmatorium', 'equipment', id],
    title: {
      id: `content.makedatanotlore.scvmatorium.${id}.title`,
      values: {},
    },
    description: {
      id: `content.makedatanotlore.scvmatorium.${size}Container.description`,
      values: {},
    },
  },
  generateValues,
});

const bags = () => {
  const small = [
    bagEntry('knapsack', 'small'),
    bagEntry('saddlebags', 'small'),
    bagEntry('satchel', 'small'),
    bagEntry('basket', 'small'),
    bagEntry('rucksack', 'small'),
  ];

  const large = [bagEntry('fishNet', 'large'), bagEntry('gunnySack', 'large')];

  const vehicle = [
    entry('wheelBarrow'),
    entry('corpseCart', () => ({ corpses: random(0, 4) })),
  ];

  const beast = [entry('mule'), entry('ox'), entry('goat')];

  return {
    small,
    large,
    vehicle,
    beast,
  };
};

const general = [
  entry('braidedIntestines'),
  entry('rustedChain'),
  entry('oilWrappedBones', ({ presence }) => ({
    amount: max([random(1, 4) + presence, 1])!,
  })),
  entry('candles', ({ presence }) => ({
    amount: max([random(1, 4) + presence, 1])!,
  })),
  entry('rustyLamp', ({ presence }) => ({
    hours: max([random(1, 4) + presence, 1])!,
  })),
  entry('quicksilver'),
  entry('earwaxPicker'),
  entry('soap'),
  entry('charcoal'),
  entry('drinkingHorn'),
  entry('bloodiedBandages', () => ({
    uses: random(1, 4),
  })),
  entry('flintAndTinder'),
  entry('horseshoes', () => ({
    amount: random(1, 4),
  })),
  entry('ballAndChain'),
  entry('handcuffs', () => ({
    key: sample(['key', 'noKey'])!,
  })),
  entry('hayPillowcase'),
  entry('crunchyBlanket'),
  entry('curtainTurnedCloak'),
  entry('lute', () => ({
    strings: random(0, 12),
  })),
  entry('flute'),
  entry('mouthHarp'),
  entry('jarOfGrease'),
  entry('boxOfLocusts'),
  entry('liquidRot'),
  entry('trollBlood', () => ({
    doses: random(1, 4),
  })),
  entry('scabbyCat', () => ({ hp: random(1, 4) + 1 })),
  entry('tinyCobra'),
  entry('warRooster', () => ({ hp: random(1, 2) + 1 })),
  entry('vampreyLamprey'),
  entry('boneDice', () => ({ amount: random(1, 4) })),
  entry('deckOfCards', () => ({ amount: random(0, 6) })),
  entry('rulebook'),
  entry('chessPieces', () => ({ amount: random(10, 20) })),
  entry('marbles', () => ({ amount: random(6, 16) })),
  entry('mirror', () => ({ worth: random(10, 50) })),
  entry('ruby', () => ({ worth: random(20, 60) })),
  entry('fineWine', () => ({ worth: random(5, 25) })),
  entry('sewingKit'),
  entry('cookware'),
  entry('cartographyKit'),
  entry('ropeLadder'),
  entry('woodenPole'),
  entry('pitons'),
  entry('rottenShield'),
  entry('rustyShield'),
  entry('shinyShield'),
  entry('brokenBottle'),
  entry('ironRod'),
  entry('potatoes'),
  entry('molderingGrains'),
  entry('southwester'),
  entry('overcoat'),
  entry('moleskinMoccasins'),
  entry('moldskinMoccasins'),
  entry('goblinGloves'),
  entry('tentPegs'),
];

const weapons = () => {
  const d4 = [
    entry('shiv'),
    entry('quarterStaff'),
    entry('bludgeon'),
    entry('dirk'),
  ];

  const d6 = [entry('morningStar'), entry('broadsword')];

  const d8 = [
    entry('throwingAxes', ({ presence }) => ({
      amount: max([2 + presence, 1])!,
    })),
    entry('longsword'),
  ];

  const d10 = [
    entry('arbalest', ({ presence }) => ({
      bolts: max([10 + presence, 1])!,
    })),
    entry('dreihander'),
  ];

  return {
    d4,
    d6,
    d8,
    d10,
  };
};

const armor = () => {
  const light = [
    entry('gambeson'),
    entry('boiledLeather'),
    entry('quiltedJacket'),
  ];

  const medium = [
    entry('lamellar'),
    entry('rustyChainmail'),
    entry('steelBreastplate'),
  ];

  const heavy = [
    entry('buckledPlate'),
    entry('stainedPlate'),
    entry('rustyPlate'),
  ];

  return {
    light,
    medium,
    heavy,
  };
};

const foodAndWater = [
  entry('foodAndWater', () => ({
    days: random(1, 4)!,
  })),
];

const silver = [
  entry('silver', ({ money }) => ({
    coins: random(money.min, money.max)!,
  })),
];

export const equipment = {
  general,
  bags: bags(),
  weapons: weapons(),
  armor: armor(),
  foodAndWater,
  silver,
};
