import styled from 'styled-components';
import Book from 'app/assets/Vize_pro_evropu_obalka.png';

const Wrapper = styled.div`
  width: 400px;
  height: 607px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transform: rotate(5deg);
`;

export const BookCover = () => {
  return (
    <Wrapper>
      <img src={Book} width={'100%'} />
    </Wrapper>
  );
};
