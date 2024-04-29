import palette from 'app/theme/palette';
import styled from 'styled-components';

export const AuthorSectionOuterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
`;

export const AuthorSectionInnerWrapper = styled.div`
  width: 80vw;
  max-width: 1200px;
  display: grid;
  justify-items: center;
`;

export const SectionTitle = styled.h2`
  color: ${palette.primary.main};
`;
