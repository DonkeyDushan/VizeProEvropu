import styled from 'styled-components';
import Book from 'app/assets/Vize_pro_evropu_obalka.png';
import { breakpoints } from 'app/theme/breakpoints';

const Wrapper = styled.div`
  width: 400px;
  height: 600px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transform: rotate(5deg);
  z-index: 2;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 40vw;
    height: 60vw;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    width: 60vw;
    height: 90vw;
  }
`;

export const BookCover = () => {
  return (
    <Wrapper>
      <img src={Book} width={'100%'} height={'100%'} />
    </Wrapper>
  );
};
