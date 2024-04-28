import styled from 'styled-components';

export const MainSectionOuterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: calc(100vh - 100px) 100px;
  justify-items: center;
`;

export const MainSectionInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.primary.main};
`;
