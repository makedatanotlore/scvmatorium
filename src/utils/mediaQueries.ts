const customMediaQuery = (width: number, minOrMax: string = 'max'): string =>
  `@media screen and (${minOrMax}-width: ${width}px)`;

export const mediaQuery = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1920),
  laptop: customMediaQuery(1100),
  tablet: customMediaQuery(960),
  phone: customMediaQuery(576),
};
