import palette from 'app/theme/palette';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  justify-items: center;
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: calc(100% - 120px);
  z-index: 2;
`;

export const Slider = styled.div`
  display: grid;
  height: 400px;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: translate 0.2s;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
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
`;

export const UnrollButton = styled.button`
  display: grid;
  justify-items: center;
  background-color: transparent;
  color: ${palette.primary.main};
  font-weight: 700;
  font-size: 1rem;
  align-items: center;
  border: none;
  transition: transform 0.2s;

  &:hover {
    div {
      transform: translate(3px, -3px);
    }
  }
`;
