import { MainSectionInnerWrapper, MainSectionOuterWrapper } from 'app/components';
import { ScrollButton } from 'app/components/ScrollButton';

export const MainSection = () => {
  return (
    <MainSectionOuterWrapper>
      <MainSectionInnerWrapper>
        <h1>VIZE PRO EVROPU</h1>
      </MainSectionInnerWrapper>
      <ScrollButton />
    </MainSectionOuterWrapper>
  );
};
