import {
  AuthorSectionInnerWrapper,
  AuthorSectionOuterWrapper,
  SectionTitle,
} from 'app/components/AuthorsSection';
import { Carousel } from 'app/components/Carousel';

export const AuthorsSection = () => {
  return (
    <AuthorSectionOuterWrapper>
      <AuthorSectionInnerWrapper>
        <SectionTitle>Autorky a autoři sborníku</SectionTitle>
        <Carousel />
      </AuthorSectionInnerWrapper>
    </AuthorSectionOuterWrapper>
  );
};
