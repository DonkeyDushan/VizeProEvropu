import styled from 'styled-components';

export const MainSectionOuterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: calc(100vh - 50px) 50px;
  justify-items: center;
`;

export const MainSectionInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  background-color: ${(props) => props.theme.primary.main};
  justify-content: center;
  align-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right 20px bottom 20px;

  @media screen and (max-width: 600px) {
    padding-bottom: 40px;
  }
`;

export const ContentWrapper = styled.div`
  width: 80vw;
  max-width: 1200px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
