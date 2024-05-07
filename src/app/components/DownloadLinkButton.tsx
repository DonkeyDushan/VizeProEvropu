import palette from 'app/theme/palette';
import styled from 'styled-components';
import texturaURL from 'app/assets/Textura.jpg?url';
import BookPDF from 'app/assets/VIZE_PRO_EVROPU.pdf?url';

const DonwloadLink = styled.a`
  position: relative;
  align-self: center;
  height: fit-content;
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: 100px;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: 'Coolvetica';
  color: ${palette.primary.main};
  background-color: transparent;
  transition: outline 0.15s;
  border: 2px solid ${palette.primary.main};
  z-index: 2;
  rotate: -2deg;

  &&::after {
    position: absolute;
    top: 0px;
    left: 0px;
    content: 'Stáhnout knihu';
    font-size: 1.8rem;
    font-weight: 300;
    font-family: 'Coolvetica';
    white-space: nowrap;
    height: fit-content;
    width: fit-content;
    padding: 1rem 2rem;
    color: ${palette.primary.main};
    border: 2px solid #fff;
    border-radius: 100px;
  }

  @keyframes animatedBackground {
    from {
      background-position: 100% 50%;
    }
    to {
      background-position: 20% 0;
    }
  }

  &&::before {
    position: absolute;
    top: 0;
    left: 0;
    content: 'Stáhnout knihu';
    font-family: 'Coolvetica';
    color: transparent;
    font-size: 1.8rem;
    font-weight: 300;
    white-space: nowrap;
    height: fit-content;
    width: fit-content;
    padding: 1rem 2rem;
    border-radius: 100px;
    background-color: ${palette.background};
    background-image: url(${texturaURL});
    background-position: center;
    filter: contrast(120%) brightness(1.2);
    border: 2px solid transparent;
    position: absolute;
    rotate: 3deg;
    translate: 0.5rem 0.8rem;
    animation: animatedBackground 40s linear infinite alternate;
  }

  &:hover {
    &&::before {
      rotate: 0deg;
      translate: 0rem;

      transition:
        rotate 0.2s,
        translate 0.2s;
    }
  }
`;

export const DownloadLinkButton = () => {
  return (
    <DonwloadLink href={BookPDF} download>
      Stáhnout knihu
    </DonwloadLink>
  );
};