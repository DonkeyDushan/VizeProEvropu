import styled from 'styled-components';

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  position: absolute;
  bottom: 75px;
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primary.main};
  transform: rotate(45deg);
  cursor: pointer;

  &:hover {
    outline: 5px solid ${(props) => props.theme.primary.transparent};
    outline-style: 0.5;
  }
`;

export const ScrollButton = () => {
  return <Button />;
};
