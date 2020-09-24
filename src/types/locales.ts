export type Messages = {
  [id: string]: string;
};

export type Locale = {
  locale: string;
  messages: Messages;
};

export type Locales = {
  [locale: string]: Locale;
};

export type Values = { [value: string]: number | string };
