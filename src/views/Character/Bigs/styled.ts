import styled from 'styled-components';
import { mediaQuery } from 'utils/mediaQueries';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 6px;
  margin-bottom: 6px;
  ${mediaQuery.phone} {
    > div {
      flex-basis: 100%;
    }
  }
`;

export const HeaderWrapper = styled.span`
  font-size: ${({ theme }) => theme.fontSize.header};
  font-family: 'Germania One', cursive;
  color: ${({ theme }) => theme.text.primary};
`;

export const BigWrapper = styled.div`
  display: flex;
`;
