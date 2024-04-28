import {
  FooterSectionInnerWrapper,
  FooterSectionOuterWrapper,
  Mask,
} from 'app/components/FooterSection';

export const FooterSection = () => {
  return (
    <>
      <Mask />
      <FooterSectionOuterWrapper>
        <FooterSectionInnerWrapper>
          <div>
            Markéta Gregorová Markéta Gregorová je poslankyně Evropského parlamentu za Piráty.
            Věnuje se hybridním hrozbám, kyberbezpečnosti a Východnímu partnerství.
          </div>
          <div>
            Financování Kampaň je financovaná z prostředků frakce Evropského parlamentu Zelení/ESA.
          </div>
          <div>Sociální sítě loga na můj twitter, youtube a instagram</div>
          <div>Loga (toto není nadpis) logo Greens/EFA moje logo logo PIrátské delegace v EP</div>
        </FooterSectionInnerWrapper>
      </FooterSectionOuterWrapper>
    </>
  );
};
