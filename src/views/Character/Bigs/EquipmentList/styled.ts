import styled from 'styled-components';

export { HeaderWrapper } from '../styled';

export const FlexWrapper = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 0.5rem;
  flex-grow: 1;
`;

export const ListWrapper = styled.ul`
  color: ${({ theme }) => theme.text.primary};

  list-style: disc;
  text-indent: 0em;
  padding-left: 12px;
  padding-right: 12px;
`;

export const SmallWrapper = styled.li`
  line-height: 1.5rem;
  margin-left: 12px;
`;

export const TitleWrapper = styled.span`
  font-weight: 700;
`;

export const DescriptionWrapper = styled.span`
  color: ${({ theme }) => theme.text.secondary};
`;
