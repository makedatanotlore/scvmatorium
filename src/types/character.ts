import { Values } from 'types/locales';

export type Character = {
  tags: string[];
  smalls: Small[];
  bigs: Big[];
};

export type Small = {
  title: Message;
  description: Message;
};

export type Big = {
  header: Message;
  content: Small[];
  component: 'ability-list' | 'plain-box' | 'equipment-list';
};

export type Message = { id: string; values?: Values };

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
  generateValues?: () => Values;
};

export type Equipment = {
  id: string;
  generateValues?: () => Values;
};
