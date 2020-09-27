import styled from 'styled-components';

export const FlexWrapper = styled.div`
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border-top: dashed ${({ theme }) => theme.text.primary} 1px;
  border-bottom: dashed ${({ theme }) => theme.text.primary} 1px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

export const TitleWrapper = styled.div`
  font-weight: 700;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const DescriptionWrapper = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
