import { Attribution } from 'types/character';
import {
  makedatanotlore,
  khordal,
  ripleyc,
  goatmansgoblet,
  greysonwhy,
  chalkdown,
} from 'rng/authors';

export const uncredited: Attribution = {
  title: { id: 'content.shared.uncredited' },
  id: 'uncredited',
  authors: [],
  url: '',
};

export const scvmatorium: Attribution = {
  title: { id: 'content.makedatanotlore.scvmatorium' },
  id: 'scvmatorium',
  authors: [makedatanotlore],
  url:
    'https://docs.google.com/document/d/1VPsCnoa4SDvoNTpUYR_oTwMz4kksyiV0iaEePjreHlc/edit?usp=sharing',
};

export const scvmfurther2: Attribution = {
  title: { id: 'content.makedatanotlore.scvmfurther2' },
  id: 'scvmfurther2',
  authors: [makedatanotlore],
  url:
    'https://docs.google.com/document/d/1LOijYULDxCiABHlzf1K_Zl-Yig91CQA1t8GaoAFBA68/edit?usp=sharing',
};

export const landlockedBuccaneer: Attribution = {
  title: { id: 'content.makedatanotlore.landlockedBuccaneer' },
  id: 'landlockedBuccaneer',
  authors: [makedatanotlore],
  url: 'https://makedatanotlore.itch.io/landlocked-buccaneer',
};

export const misbegottenRelict: Attribution = {
  title: { id: 'content.khordal.misbegottenRelict' },
  id: 'misbegottenRelict',
  authors: [khordal],
  url:
    'https://docs.google.com/document/d/1ndEAhYx7-g405r1saetGfSsG1QEOpIPhf_c4nS0lFB0',
};

export const sunScorchedZealot: Attribution = {
  title: { id: 'content.khordal.sunScorchedZealot' },
  id: 'sunScorchedZealot',
  authors: [khordal],
  url:
    'https://docs.google.com/document/d/1hOm-kmOIpLW9-4SUGWUriJ6hTO32Fwi5LmDDfJCOukE/edit',
};

export const rottingRecalcitrant: Attribution = {
  title: { id: 'content.ripleyc.rottingRecalcitrant' },
  id: 'rottingRecalcitrant',
  authors: [ripleyc],
  url: 'https://makedatanotlore.itch.io/rotting-recalcitrant',
};

export const suitorKnightOfKergus: Attribution = {
  title: { id: 'content.goatmansgoblet.suitorKnightOfKergus' },
  id: 'suitorKnightOfKergus',
  authors: [goatmansgoblet],
  url:
    'https://docs.google.com/document/d/1R-VCZBrmDupJhh39IpdutQHZ4DavY0rrE94DLu2tDig/edit',
};

export const theWretchedUsurper: Attribution = {
  title: { id: 'content.goatmansgoblet.theWretchedUsurper' },
  id: 'theWretchedUsurper',
  authors: [goatmansgoblet],
  url:
    'https://docs.google.com/document/d/1PrGI1hOmimcDwQotfdCAjjhWvtIfnXaldFfs0YFivDg/edit',
};

export const psyberDevangelist: Attribution = {
  title: { id: 'content.greysonwhy.psyberDevangelist' },
  id: 'psyberDevangelist',
  authors: [greysonwhy],
  url: 'https://greysonwhy.itch.io/the-psyber-devangelist-and-other-psi-sci-fi',
};

export const blightedMerman: Attribution = {
  title: { id: 'content.chalkdown.blightedMerman' },
  id: 'blightedMerman',
  authors: [chalkdown],
  url: 'https://chalkdown.itch.io/blighted-merman',
};

export const contentAttributions = [scvmatorium, scvmfurther2];
export const classAttributions = [
  blightedMerman,
  landlockedBuccaneer,
  misbegottenRelict,
  psyberDevangelist,
  rottingRecalcitrant,
  suitorKnightOfKergus,
  sunScorchedZealot,
  theWretchedUsurper,
];
