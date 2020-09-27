import styled from 'styled-components';

export { HeaderWrapper } from '../styled';

export const FlexWrapper = styled.div`
  color: ${({ theme }) => theme.text.primary};
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  flex-grow: 1;
`;
