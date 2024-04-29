import {
  AuthorSectionInnerWrapper,
  AuthorSectionOuterWrapper,
  SectionTitle,
} from 'app/components/AuthorsSection';
import { Carousel } from 'app/components/Carousel';
import { Card } from 'app/components/Carousel/Card';
import { CarouselWrapper, Grid, UnrollButton } from 'app/components/Carousel/styledComponents';
import { Chevron } from 'app/components/Chevron';
import { authors } from 'app/content/authors';
import { useState } from 'react';

export const AuthorsSection = () => {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <AuthorSectionOuterWrapper>
      <AuthorSectionInnerWrapper>
        <SectionTitle id="authors_carousel">Autorky a autoři sborníku</SectionTitle>
        {showCarousel ? (
          <Carousel />
        ) : (
          <CarouselWrapper>
            <Grid>
              {authors.map((author) => (
                <Card key={`${author.name}`} author={author} />
              ))}
            </Grid>
          </CarouselWrapper>
        )}

        <UnrollButton onClick={() => setShowCarousel(!showCarousel)}>
          {showCarousel ? 'Zobrazit vše' : 'Sbalit'}
          <Chevron direction={showCarousel ? 'down' : 'up'} />
        </UnrollButton>
      </AuthorSectionInnerWrapper>
    </AuthorSectionOuterWrapper>
  );
};
