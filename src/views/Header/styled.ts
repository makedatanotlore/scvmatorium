import styled from 'styled-components';

export const FlexWrapper = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  padding: 6px;
  flex-direction: column;
  text-align: center;
  line-height: 2rem;
  max-width: 100%;
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.text.primary};
  & > span > span {
    color: ${({ theme }) => theme.text.secondary};
  }
`;
