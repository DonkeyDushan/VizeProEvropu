import { breakpoints } from 'app/theme/breakpoints';
import palette from 'app/theme/palette';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  justify-items: center;
`;

export const GridWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  transition: all 1s linear;
  display: grid;
  justify-items: center;

  @media screen and (max-width: ${breakpoints.md}px) {
    transition: all 1s linear;
  }
  @media screen and (max-width: ${breakpoints.sm}px) {
    transition: all 2s linear;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: calc(100% - 120px);

  @media screen and (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
    width: calc(100% - 132px);
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(1, 1fr);
    width: calc(100% - 32px);
  }
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: calc(100% - 120px);
  z-index: 2;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: calc(100% - 132px);
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    width: calc(100% - 32px);
  }
`;

export const Slider = styled.div`
  display: grid;
  left: 0;
  justify-content: center;
  align-items: start;
  height: 100%;
  transition: translate 0.2s;
`;

export const StyledCard = styled.div`
  width: 100%;
  min-height: fit-content;
  padding: 20px;
  display: grid;
  grid-template-rows: min-content min-content auto;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  color: ${palette.text.dark};
`;

export const CardTitle = styled.div`
  font-family: 'Coolvetica';
  letter-spacing: 0.05rem;
  width: 100%;
  color: ${palette.primary.main};
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: calc(50% - 60px);
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;

  @media screen and (max-width: ${breakpoints.lg}px) {
    padding: 16px;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    padding: 0px;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${palette.primary.transparent};
  border: 2px solid ${palette.primary.main};
  color: ${palette.primary.main};
  font-weight: 700;
  font-size: 1rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.sm}px) {
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    color: ${palette.primary.main};
    font-weight: 700;
    font-size: 1rem;
  }
`;
