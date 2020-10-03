import styled from 'styled-components';

export { HeaderWrapper } from '../styled';

export const FlexWrapper = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
`;

export const Padding = styled.div`
  color: ${({ theme }) => theme.text.primary};
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 0.5rem;
`;

export const BodyWrapper = styled.span``;

export const OtherWrapper = styled.p``;
