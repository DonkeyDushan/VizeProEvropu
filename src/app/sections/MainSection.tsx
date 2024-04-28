import {
  BookCover,
  MainSectionInnerWrapper,
  MainSectionOuterWrapper,
  ContentWrapper,
  DownloadButton,
} from 'app/components';
import { ScrollButton } from 'app/components/ScrollButton';

export const MainSection = () => {
  return (
    <MainSectionOuterWrapper>
      <MainSectionInnerWrapper>
        <ContentWrapper>
          <div style={{ display: 'grid', gridTemplateRows: 'min-content min-content auto' }}>
            <h1>VIZE PRO EVROPU</h1>
            <h4>kniha Markéty Gregorové</h4>
            <DownloadButton />
          </div>
          <BookCover />
        </ContentWrapper>
      </MainSectionInnerWrapper>
      <ScrollButton />
    </MainSectionOuterWrapper>
  );
};
