import { YoutubeIcon } from 'app/assets/YoutubeIcon';
import { InstagramIcon } from 'app/assets/InstagramIcon';
import { TwitterIcon } from 'app/assets/TwitterIcon';
import MarketaLogo from 'app/assets/logo_color_RGB.png';
import GreensLogo from 'app/assets/GreensEFA_logo-en.svg.png';
import PiratesLogo from 'app/assets/logo_regular_vertical.png';

import {
  FooterSectionInnerWrapper,
  FooterSectionOuterWrapper,
  LogosWrapper,
  Mask,
} from 'app/components/FooterSection';
import { SocialsLink } from 'app/components/SocialsLink';

export const FooterSection = () => {
  return (
    <>
      <Mask />
      <FooterSectionOuterWrapper>
        <FooterSectionInnerWrapper>
          <div>
            <h3>Markéta Gregorová</h3>
            <p>
              Markéta Gregorová je poslankyně Evropského parlamentu za Piráty. Věnuje se hybridním
              hrozbám, kyberbezpečnosti a Východnímu partnerství.
            </p>
          </div>
          <div>
            <h3>Financování</h3>
            <p>Kampaň je financovaná z prostředků frakce Evropského parlamentu Zelení/ESA.</p>
          </div>
          <div>
            <h3 style={{ textAlign: 'center' }}>Sociální sítě</h3>
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                padding: '1rem 1.5rem',
              }}
            >
              <SocialsLink href="https://www.instagram.com/ruzovarebelka/" target="_blank">
                <InstagramIcon />
              </SocialsLink>

              <SocialsLink href="https://twitter.com/MarketkaG/" target="_blank">
                <TwitterIcon />
              </SocialsLink>

              <SocialsLink href="https://www.youtube.com/@marketagregorova6789" target="_blank">
                <YoutubeIcon />
              </SocialsLink>
            </div>
          </div>
          <LogosWrapper>
            <img src={MarketaLogo} />
            <img src={GreensLogo} />
            <img src={PiratesLogo} />
          </LogosWrapper>
        </FooterSectionInnerWrapper>
      </FooterSectionOuterWrapper>
    </>
  );
};
