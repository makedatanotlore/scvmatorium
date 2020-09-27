import { TableEntry, Small } from 'types/character';

export const formatBody = ({ content }: TableEntry): Small => content as Small;
