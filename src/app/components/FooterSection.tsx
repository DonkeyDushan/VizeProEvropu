import { breakpoints } from 'app/theme/breakpoints';
import palette from 'app/theme/palette';
import styled from 'styled-components';

export const Mask = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${palette.primary.main};
  height: 50px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: auto;
    top: 0;
    right: 0;
    background-repeat: repeat-x;
  }

  &::before {
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(circle at 10px 15px, transparent 12px, #f5f5f5 13px);
  }

  &::after {
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(circle at 10px 0, #f5f5f5 12px, transparent 13px);
  }
`;

export const FooterSectionOuterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  background-color: ${palette.primary.main};
`;

export const FooterSectionInnerWrapper = styled.div`
  width: 80vw;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 2rem;
  padding: 32px 0;

  @media screen and (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const LogosWrapper = styled.div`
  height: min-content;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 1.5rem;
  align-self: start;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 2rem 0;
    width: 75%;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    padding: 0;
    width: 75%;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 1rem 1.5rem;

  @media screen and (max-width: ${breakpoints.md}px) {
    justify-content: start;
    padding: 1rem 0;
  }
`;

export const SocialsTitle = styled.h3`
  text-align: center;
  @media screen and (max-width: ${breakpoints.md}px) {
    text-align: start;
  }
`;
