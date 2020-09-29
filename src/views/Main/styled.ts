import styled from 'styled-components';
import { mediaQuery } from 'utils/mediaQueries';

export const FlexWrapper = styled.div`
  display: grid;
  width: 100%;
  background-size: cover;
  height: 100vh;
  width: 100%;

  align-items: start;

  grid-template-columns: 1fr 40% 1fr;
  grid-template-rows: min-content min-content 1fr min-content;
  grid-template-areas:
    '. header .'
    '. roller .'
    '. sheet .'
    '. footer .';

  ${mediaQuery.desktop} {
    grid-template-columns: 1fr 65% 1fr;
  }
  ${mediaQuery.laptop} {
    grid-template-columns: 1fr 80% 1fr;
  }
  ${mediaQuery.tablet} {
    grid-template-rows: min-content min-content 1fr min-content;
    grid-template-columns: 100%;
    grid-template-areas:
      'header'
      'roller'
      'sheet'
      'footer';
  }
`;
