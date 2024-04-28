import styled from 'styled-components';

const Button = styled.button`
  align-self: center;
  height: fit-content;
  width: fit-content;
  padding: 1rem 2rem;
  border: 1px solid #fff;

  border-radius: 100px;
  background-color: ${(props) => props.theme.primary.main};

  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 300;
  color: #fff;

  transition: outline 0.15s;

  &:hover {
    outline: 5px solid #ffffff3a;
  }
`;

export const DownloadButton = () => {
  return <Button>Stáhnout knihu</Button>;
};
