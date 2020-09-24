import messagesEnUS from './en_US';
import { Locale, Locales } from 'types/locales';

export const defaultLocale: Locale = {
  locale: 'en-US',
  messages: messagesEnUS,
};

export const locales: Locales = {
  'en-US': { locale: 'en-US', messages: messagesEnUS },
};
