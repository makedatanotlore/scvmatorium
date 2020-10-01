import { Attribution } from 'types/character';
import { makedatanotlore, khordal } from 'rng/authors';

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

export const misbegottenRelict: Attribution = {
  title: { id: 'content.khordal.misbegottenRelict' },
  id: 'misbegottenRelict',
  authors: [khordal],
  url:
    'https://docs.google.com/document/d/1ndEAhYx7-g405r1saetGfSsG1QEOpIPhf_c4nS0lFB0',
};

export const contentAttributions = [scvmatorium, scvmfurther2];
export const classAttributions = [misbegottenRelict];
