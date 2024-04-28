import {
  AuthorSectionInnerWrapper,
  AuthorSectionOuterWrapper,
} from 'app/components/AuthorsSection';
import { Carousel } from 'app/components/Carousel';

export const AuthorsSection = () => {
  return (
    <AuthorSectionOuterWrapper>
      <AuthorSectionInnerWrapper>
        <Carousel />
      </AuthorSectionInnerWrapper>
    </AuthorSectionOuterWrapper>
  );
};
