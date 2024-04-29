import palette from 'app/theme/palette';
import styled from 'styled-components';

export const SocialsLink = styled.a`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  color: ${palette.text.light};
  font-weight: 700;
  font-size: 1rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;

  svg {
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.1));
  }
`;
