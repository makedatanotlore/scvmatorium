import styled from 'styled-components';

export { HeaderWrapper } from '../styled';

export const FlexWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export const Padding = styled.div`
  color: ${({ theme }) => theme.text.primary};
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 0.5rem;

  > p > * > ol > li > strong {
  }

  > p > * > ol > li {
    margin-bottom: 2px;
  }

  > p > * > ul > li {
    margin-bottom: 2px;
  }

  > p > * ol {
    text-indent: 0em;
    list-style: none;
  }

  > p > * ul {
    text-indent: 0em;
  }

  > p > * > ol > li > span {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

export const StyledText = styled.p`
  * > span {
    color: ${({ theme }) => theme.text.secondary};
  }
`;
