import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border-top: dashed white 1px;
  border-bottom: dashed white 1px;
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
