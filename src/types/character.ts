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
    id: 'abilityList' | 'plainBox' | 'equipmentList' | 'introduction';
  };
};

export type Message = { id: string; values?: Values; format?: Message };

export type Author = {
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

export type Equipment = {
  id: string;
  generateValues?: GenerateValuesFn;
};

export type GenerateValuesProps = {
  presence: number;
  armor: 'd2' | 'd3' | 'd4';
  weapon: 'd4' | 'd6' | 'd8' | 'd10';
  money: { min: number; max: number };
};

export type GenerateValuesFn = (input: GenerateValuesProps) => Values;
