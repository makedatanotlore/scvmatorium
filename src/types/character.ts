import { Values } from 'types/locales';

export type Character = {
  tags: string[];
  smalls: Small[];
  bigs: Big[];
};

export type Small = {
  title: Message;
  description: Message;
  tags: string[];
};

export type Big = {
  header: Message;
  content: Small[];
  component: {
    id:
      | 'abilityList'
      | 'plainBox'
      | 'equipmentList'
      | 'introduction'
      | 'table'
      | 'halfBox';
  };
};

export type Message = { id: string; values?: Values; format?: Message };

export type Author = {
  id: string;
  name: string;
  url?: string;
};

export type Attribution = {
  id: string;
  title: Message;
  authors: Author[];
  url?: string;
};

export type TableEntry = {
  id: string;
  tags: string[];
  attribution: Attribution;
  content: Small | Big;
  generateValues?: GenerateValuesFn;
};

export type TableEntryBig = {
  id: string;
  tags: string[];
  attribution: Attribution;
  content: Big;
  generateValues?: GenerateValuesFn;
};

export type Equipment = {
  id: string;
  generateValues?: GenerateValuesFn;
};

export type GenerateValuesProps = {
  presence: number;
  money: { min: number; max: number };
};

export type GenerateValuesFn = (input: GenerateValuesProps) => Values;
