import { Small } from 'types/character';

const blessing = (id: string): Small => ({
  tags: ['khordal', 'sunScorchedZealot', 'tableEntry', 'blessing', id],
  title: {
    id: `content.khordal.sunScorchedZealot.${id}.title`,
    values: {},
  },
  description: {
    id: `content.khordal.sunScorchedZealot.${id}.description`,
    values: {},
  },
});

export const blessings = [
  'heavenlyFury',
  'empyrealVisage',
  'castIntoLight',
  'radiance',
  'radiantSpeech',
  'thesun',
].map((id) => blessing(id));
