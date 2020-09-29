import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text.inverted};
  padding: 6px;
`;

export const Header = styled.div`
  color: ${({ theme }) => theme.text.inverted};
  font-weight: 700;
  padding: 0.5rem;
`;

export const AttributionWrapper = styled.span`
  padding: 0.25rem;
`;
