import { entry } from './entry';

export const infectionOrigins = [
    'strangePotion',
    'demonicGoblin',
    'goblinRose',
    'undeadGoblin',
    'serpentGod',
    'bornLikeThis',
].map((x) => entry(x));