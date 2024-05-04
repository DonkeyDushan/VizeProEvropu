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
  SocialsTitle,
  SocialsWrapper,
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
            <p>Sborník je financován z&nbsp;prostředků frakce Evropského parlamentu Zelení/ESA.</p>
          </div>
          <div>
            <SocialsTitle>Sociální sítě</SocialsTitle>
            <SocialsWrapper>
              <SocialsLink href="https://www.instagram.com/ruzovarebelka/" target="_blank">
                <InstagramIcon />
              </SocialsLink>

              <SocialsLink href="https://twitter.com/MarketkaG/" target="_blank">
                <TwitterIcon />
              </SocialsLink>

              <SocialsLink href="https://www.youtube.com/@marketagregorova6789" target="_blank">
                <YoutubeIcon />
              </SocialsLink>
            </SocialsWrapper>
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
