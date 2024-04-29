import palette from 'app/theme/palette';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-color: #4b5563;
  width: calc(100% - 120px);
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
  z-index: 1;
`;

export const CardTitle = styled.div`
  font-family: 'Coolvetica';
  letter-spacing: 0.05rem;
  width: 100%;
  text-align: center;
  color: ${palette.primary.main};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const PhotoWrapper = styled.div`
  width: 150px;
  height: 150px;
  overflow: clip;
  border-radius: 50%;
  outline: 5px solid ${palette.outline};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  justify-content: space-between;
  align-items: center;
`;
