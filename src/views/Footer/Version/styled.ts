import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.75rem;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.text.primary};
  opacity: 0.5;
`;
