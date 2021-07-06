import { Attribution, Big, GenerateValuesFn, Small, TableEntry, TableEntryBig } from 'types/character';

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

export const formatTitledEntry = ({
  content,
  generateValues,
}: TableEntryBig): Big => {
  const { header, content: innerContent, component } = content as Big;
  const values = generateValues
    ? generateValues({ presence: 0, money: { min: 0, max: 0 } })
    : {};
  const smalls = innerContent.map(sml => {
    const {tags, title, description} = sml;
    return {
      tags,
      title: {...title, values},
      description: {...description, values}
    };
  });
  return {
    header: { ...header, values},
    content: smalls,
    component
  };
};

// A TableEntry directly using the text from a single id.
export const tableEntry = (attribution: Attribution, id: string, generateValues?: GenerateValuesFn): TableEntry => ({
  id: `${attribution.id}-${id}`,
  tags: [attribution.authors[0].id, attribution.id, id],
  attribution,
  content: {
    tags: [attribution.authors[0].id, attribution.id, id],
    title: {
      id: `content.${attribution.authors[0].id}.${attribution.id}.${id}`,
      values: {},
    },
    description: {
      id: `content.${attribution.authors[0].id}.${attribution.id}.${id}`,
    },
  },
  generateValues,
});

// A TableEntry with a title and description
export const equipmentEntry = (attribution: Attribution, id: string, generateValues?: GenerateValuesFn): TableEntry => ({
  id: `${attribution.id}-${id}`,
  tags: [attribution.authors[0].id, attribution.id, id],
  attribution,
  content: {
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
  generateValues,
});

export const formatTableEntry = ({
  content,
  generateValues,
}: TableEntry): Small => {
  const { title, description, tags } = content as Small;
  const values = generateValues
    ? generateValues({ presence: 0, money: { min: 0, max: 0 } })
    : {};
  return {
    tags,
    title: { ...title, values },
    description: { ...description, values },
  };
};

export const blurb = (attribution: Attribution) => ({
  tags: [attribution.id, attribution.authors[0].id, 'blurb'],
  title: {
    id: `content.${attribution.authors[0].id}.${attribution.id}.blurb`,
    values: {},
  },
  description: {
    id: `content.${attribution.authors[0].id}.${attribution.id}.blurb`,
    values: {},
  }
});
