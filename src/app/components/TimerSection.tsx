import { breakpoints } from 'app/theme/breakpoints';
import palette from 'app/theme/palette';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 2rem;

  h3 {
    text-align: center !important;
    margin-bottom: 2rem;
  }

  h2 {
    text-align: center !important;
    margin: 0;
    font-size: 3rem;
  }
`;

export const TimeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 0.5rem;
  column-gap: 1.5rem;

  @media screen and (max-width: ${breakpoints.md}px) {
    grid-template-columns: 1fr 1fr;
  }
`;
