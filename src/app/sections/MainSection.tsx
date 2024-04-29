import {
  BookCover,
  MainSectionInnerWrapper,
  MainSectionOuterWrapper,
  ContentWrapper,
  DownloadButton,
} from 'app/components';
import { ScrollButton } from 'app/components/ScrollButton';
import Line from 'app/assets/Vize_pro_evropu_linka.png';

export const MainSection = () => {
  return (
    <MainSectionOuterWrapper>
      <MainSectionInnerWrapper style={{ backgroundImage: `url(${Line})` }}>
        <ContentWrapper>
          <div style={{ display: 'grid', gridTemplateRows: 'min-content min-content auto' }}>
            <h1>VIZE PRO EVROPU</h1>
            <h2>sborník Markéty Gregorové</h2>
            <DownloadButton />
          </div>
          <BookCover />
        </ContentWrapper>
      </MainSectionInnerWrapper>
      <ScrollButton />
    </MainSectionOuterWrapper>
  );
};
