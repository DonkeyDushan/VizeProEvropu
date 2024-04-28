import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: grid;
  grid-template-rows: minmax(100vh, max-content) minmax(25vh, max-content) min-content minmax(
      25vh,
      max-content
    );
`;
