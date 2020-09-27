import { TableEntry, Small } from 'types/character';

export const formatTrait = ({ content }: TableEntry): Small => content as Small;
