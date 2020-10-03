import styled from 'styled-components';

export { HeaderWrapper } from '../styled';

export const FlexWrapper = styled.div`
  flex-basis: 50%;
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
  margin-left: 12px;
  margin-bottom: 2px;
`;

export const TitleWrapper = styled.span`
  font-weight: 700;
`;

export const DescriptionWrapper = styled.span`
  color: ${({ theme }) => theme.text.secondary};
`;

export const Padding = styled.div`
  color: ${({ theme }) => theme.text.primary};
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 0.5rem;
`;
