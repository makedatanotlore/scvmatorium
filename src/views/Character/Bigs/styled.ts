import styled from 'styled-components';
import { mediaQuery } from 'utils/mediaQueries';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  ${mediaQuery.phone} {
    > div {
      flex-basis: 100%;
    }
  }
`;

export const HeaderWrapper = styled.span`
  font-size: 2rem;
  font-family: 'Germania One', cursive;
  color: ${({ theme }) => theme.text.primary};
`;

export const BigWrapper = styled.div``;
