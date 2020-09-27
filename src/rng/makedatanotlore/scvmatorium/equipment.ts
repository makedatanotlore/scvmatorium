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

const smallContainer = entry('smallContainer', () => ({
  container: sample([
    'knapsack',
    'saddlebags',
    'satchel',
    'basket',
    'rucksack',
    'leatherBag',
    sample(['woodenBucket', 'metalBucket']),
  ])!,
}));

const largeContainer = entry('largeContainer', () => ({
  container: sample(['fishNet', 'largeBrownSack', 'gunnySack'])!,
}));

const vehicle = entry('vehicle', () => ({
  ...sample([
    { vehicle: 'wheelbarrow' },
    { vehicle: 'corpseCart', corpses: random(0, 4) },
  ]),
}));

const beast = entry('beast', () => ({
  beast: sample(['mule', 'goat', 'ox'])!,
}));

const listI = [
  smallContainer,
  largeContainer,
  smallContainer,
  largeContainer,
  vehicle,
  smallContainer,
  largeContainer,
  vehicle,
  beast,
];

const listII = [
  entry('rope', () => ({
    rope: sample(['braidedIntestines', 'rustedChain'])!,
  })),
  entry('torches', ({ presence }) => ({
    torches: sample(['oilWrappedBones', 'candles'])!,
    amount: max([random(1, 4) + presence, 1])!,
  })),
  entry('lamp', ({ presence }) => ({
    lamp: sample(['rustyLamp'])!,
    hours: max([random(1, 4) + presence, 1])!,
  })),
  entry('metal', () => ({
    metal: sample(['quicksilver'])!,
  })),
  entry('uncleanScroll'),
  entry('utensil', () => ({
    utensil: sample(['earwaxPicker', 'soap', 'charcoal', 'drinkingHorn'])!,
  })),
  entry('medicine', () => ({
    medicine: sample(['bandages'])!,
    uses: random(1, 4),
  })),
  entry('tool', () => ({
    tool: sample(['flint', 'horseShoes'])!,
    horseShoes: random(1, 4),
  })),
  entry('thing', () => ({
    thing: sample(['ballAndChain', 'handcuffs'])!,
  })),
  entry('comfort', () => ({
    comfort: sample(['pillowcase', 'blanket', 'cloak'])!,
  })),
  entry('instrument', () => ({
    instrument: sample(['lute', 'flute', 'mouthHarp'])!,
    strings: random(0, 12),
  })),
  entry('trap', () => ({
    trap: sample(['grease', 'locusts', 'liquidRot'])!,
  })),
];

const listIII = [
  entry('potion', () => ({
    potion: sample(['trollBlood'])!,
    doses: random(1, 4)!,
  })),
  entry('sacredScroll'),
  entry(
    'pet',
    () =>
      sample([
        { pet: 'scabbyCat', hp: random(1, 4) + 1 },
        { pet: 'tinyCobra', hp: 1 },
        { pet: 'warRooster', hp: random(1, 4) },
        { pet: 'lamprey', hp: 1 },
      ])!
  ),
  entry(
    'gambling',
    () =>
      sample([
        { gambling: 'boneDice', amount: random(1, 4) },
        { gambling: 'cards', amount: random(1, 6) },
        { gambling: 'rulebook', amount: 0 },
        { gambling: 'chessPieces', amount: random(1, 20) },
        { gambling: 'marbles', amount: random(1, 6) + 10 },
      ])!
  ),
  entry('luxury', () => ({
    luxury: sample(['mirror', 'ruby', 'fineWine'])!,
    worth: random(10, 60),
  })),
  entry('crafting', () => ({
    crafting: sample(['sewingKit', 'cookware', 'cartographyKit'])!,
  })),
  entry('chain', () => ({
    chain: sample(['ropeLadder'])!,
  })),
  entry('travel', () => ({
    travel: sample(['pole', 'pitons'])!,
  })),
  entry('shield', () => ({
    shield: sample(['smallShield', 'largeShield'])!,
  })),
  entry('improvisedWeapon', () => ({
    improvisedWeapon: sample(['hammer', 'brokenBottle', 'ironRod'])!,
  })),
  entry('edible', () => ({
    edible: sample(['potatoes'])!,
  })),
  entry('survival', () => ({
    survival: sample([
      'southwester',
      'overcoat',
      'moccasins',
      'gloves',
      'tentPegs',
    ])!,
  })),
];

const weapons = [
  entry('femur', () => ({
    weapon: sample(['shiv'])!,
  })),
  entry('staff', () => ({
    weapon: sample(['quarterstaff'])!,
  })),
  entry('shortsword', () => ({
    weapon: sample(['bludgeon'])!,
  })),
  entry('knife', () => ({
    weapon: sample(['dirk'])!,
  })),
  entry('warhammer', () => ({
    weapon: sample(['morningstar'])!,
  })),
  entry('sword', () => ({
    weapon: sample(['broadsword'])!,
  })),
  entry('bow', ({ presence }) => ({
    weapon: sample(['throwingAxe'])!,
    ammunition: max([2 + presence, 1])!,
  })),
  entry('flail', () => ({
    weapon: sample(['longsword'])!,
  })),
  entry('crossbow', ({ presence }) => ({
    weapon: sample(['arbalest'])!,
    ammunition: max([10 + presence, 1])!,
  })),
  entry('zweihander', () => ({
    weapon: sample(['estoc'])!,
  })),
];

const armor = [
  entry('light', () => ({
    armor: sample(['gambeson', 'boiledLeather', 'quiltedJacket'])!,
  })),
  entry('medium', () => ({
    armor: sample(['lamellar', 'chainmail', 'steelBreastplate'])!,
  })),
  entry('heavy', () => ({
    armor: sample(['brigandine', 'platemail'])!,
  })),
];

const foodAndWater = [
  entry('foodAndWater', () => ({
    foodAndWater: sample(['foodAndWater'])!,
    days: random(1, 4)!,
  })),
];

const monies = [
  entry('money', ({ money }) => ({
    money: sample(['silver'])!,
    coins: random(money.min, money.max)!,
  })),
];

export const equipment = {
  listI,
  listII,
  listIII,
  weapons: {
    d4: weapons.slice(0, 4),
    d6: weapons.slice(0, 6),
    d8: weapons.slice(0, 8),
    d10: weapons,
  },
  armor: {
    d2: armor.slice(0, 1),
    d3: armor.slice(0, 2),
    d4: armor.slice(0, 3),
  },
  foodAndWater,
  monies,
};
