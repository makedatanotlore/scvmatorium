import { Attribution, Big, GenerateValuesFn, TableEntryBig } from 'types/character';

// A big entry with a title and a description.
export const titledEntry = (
  attribution: Attribution, 
  id: string,
  componentId: 'abilityList' | 'plainBox' | 'equipmentList' | 'introduction' | 'table' | 'halfBox' = 'halfBox',
  generateValues?: GenerateValuesFn): TableEntryBig => ({
    id: `${attribution.id}-${id}`,
    tags: [attribution.authors[0].id, attribution.id, id],
    attribution,
    content: {
      component: { id: componentId },
      header: {
        id: `content.${attribution.authors[0].id}.${attribution.id}.${id}.title`,
        values: {},
      },
      content: [
        {
          tags: [attribution.authors[0].id, attribution.id, id],
          title: {
            id: `content.${attribution.authors[0].id}.${attribution.id}.${id}.title`,
            values: {},
          },
          description: {
            id: `content.${attribution.authors[0].id}.${attribution.id}.${id}.description`,
            values: {},
          },
        },
      ],
    },
    generateValues,
  });

export const formatTitledEntry = ({ content }: TableEntryBig) => content as Big;
