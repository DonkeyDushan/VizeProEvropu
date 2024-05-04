import { breakpoints } from 'app/theme/breakpoints';
import styled from 'styled-components';

export const MainSectionOuterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: calc(100vh - 50px) 50px;
  justify-items: center;

  @media screen and (max-width: ${breakpoints.md}px) {
    grid-template-rows: calc(100vh - 50px) 50px;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    grid-template-rows: auto 50px;
  }
`;

export const MainSectionInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  background-color: ${(props) => props.theme.primary.main};
  justify-items: center;
  align-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right 20px bottom 20px;

  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 64px 24px;
    background-size: 75%;
    background-position: right 20px bottom 20px;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    padding: 24px;
    padding-bottom: 64px;

    background-size: contain;
    background-position: left 20px bottom 25px;
  }
`;

export const ContentWrapper = styled.div`
  width: 80vw;
  max-width: 1200px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  @media screen and (max-width: ${breakpoints.md}px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 4rem;

    & > div {
      justify-items: center;

      h2 {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    gap: 3rem;
  }
`;
