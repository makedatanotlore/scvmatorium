import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 0.5rem;
  flex-grow: 1;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
`;

export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.5rem;
  margin-left: 6px;
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
