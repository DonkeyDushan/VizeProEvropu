import { breakpoints } from 'app/theme/breakpoints';
import palette from 'app/theme/palette';
import styled from 'styled-components';

export const AuthorSectionOuterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  padding-bottom: 24px;
`;

export const AuthorSectionInnerWrapper = styled.div`
  width: 80vw;
  min-width: 1000px;
  max-width: 1200px;
  display: grid;
  justify-items: center;

  @media screen and (max-width: ${breakpoints.md}px) {
    min-width: 800px;
    max-width: 1000px;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    width: 100%;
    padding: 0 1rem;
    min-width: unset;
    max-width: unset;
  }
`;

export const SectionTitle = styled.h2`
  color: ${palette.primary.main};
`;
