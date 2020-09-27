import styled from 'styled-components';
import { mediaQuery } from 'utils/mediaQueries';

export const FlexWrapper = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vmin;
  background-size: cover;
  font-size: 0.85rem;
  align-items: start;

  grid-template-columns: 1fr 80% 1fr;
  grid-template-rows: min-content min-content 1fr;
  grid-template-areas:
    '. header .'
    '. roller .'
    '. sheet .';

  ${mediaQuery.laptop} {
    grid-template-columns: 1fr 80% 1fr;
  }
  ${mediaQuery.tablet} {
    grid-template-columns: 100%;
    grid-template-areas:
      'header'
      'roller'
      'sheet';
  }
`;
