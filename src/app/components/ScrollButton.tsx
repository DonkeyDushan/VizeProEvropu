import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 135px;
  overflow: clip;
  display: flex;
  justify-content: center;

  transition: height 0.15s;

  &:hover {
    height: 45px;
  }
`;

const Button = styled.a`
  position: absolute;
  bottom: 20px;
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.primary.main};
  transform: rotate(45deg);

  transition:
    outline 0.15s,
    bottom 0.15s;

  &:hover {
    outline: 5px solid ${(props) => props.theme.primary.transparent};
    outline-style: 0.5;
  }
`;

export const ScrollButton = () => {
  return (
    <ButtonWrapper>
      <Button href={'#authors_carousel'} />
    </ButtonWrapper>
  );
};
