import {
  BookCover,
  MainSectionInnerWrapper,
  MainSectionOuterWrapper,
  ContentWrapper,
  DownloadLinkButton,
} from 'app/components';
import { ScrollButton } from 'app/components/ScrollButton';
import Line from 'app/assets/Vize_pro_evropu_linka.png';
import { FormLinkButton } from 'app/components/FormLinkButton';

export const MainSection = () => {
  return (
    <MainSectionOuterWrapper>
      <MainSectionInnerWrapper style={{ backgroundImage: `url(${Line})` }}>
        <ContentWrapper>
          <div style={{ display: 'grid', gridTemplateRows: 'min-content min-content auto' }}>
            <h1>VIZE PRO EVROPU</h1>
            <h2>sborník Markéty Gregorové</h2>
            <div style={{ display: 'grid', alignContent: 'center', gap: '2.5rem' }}>
              <FormLinkButton />
              <DownloadLinkButton />
            </div>
          </div>
          <BookCover />
        </ContentWrapper>
      </MainSectionInnerWrapper>
      <ScrollButton />
    </MainSectionOuterWrapper>
  );
};
