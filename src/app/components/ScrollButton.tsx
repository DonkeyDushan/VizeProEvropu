import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 135px;
  overflow: clip;

  transition: height 0.15s;

  &:hover {
    height: 45px;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  left: 10px;
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 10px;
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
      <Button />
    </ButtonWrapper>
  );
};
