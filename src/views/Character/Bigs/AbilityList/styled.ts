import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.25rem;
  margin-left: 1rem;
`;

export const TitleWrapper = styled.div`
  font-weight: 700;
  display: inline-block;
  min-width: 100px;
  color: ${({ theme }) => theme.text.primary};
`;

export const DescriptionWrapper = styled.div`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.text.secondary};
`;

export { HeaderWrapper } from '../styled';
