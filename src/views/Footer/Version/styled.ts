import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.text.primary};
  opacity: 0.5;
`;
