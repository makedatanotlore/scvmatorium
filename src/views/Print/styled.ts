import styled from 'styled-components';
import { mediaQuery } from 'utils/mediaQueries';

export const FlexWrapper = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vmin;
  background-size: cover;
  align-items: start;
  font-size: 10px;

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
