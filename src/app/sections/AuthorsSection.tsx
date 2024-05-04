import {
  AuthorSectionInnerWrapper,
  AuthorSectionOuterWrapper,
  SectionTitle,
} from 'app/components/AuthorsSection';
import { Carousel } from 'app/components/Carousel';
import { Card } from 'app/components/Carousel/Card';
import {
  /*   CarouselWrapper, */
  Grid,
  GridWrapper,
  UnrollButton,
} from 'app/components/Carousel/styledComponents';
import { Chevron } from 'app/components/Chevron';
import { authors } from 'app/content/authors';
import { useState } from 'react';

export const AuthorsSection = () => {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <AuthorSectionOuterWrapper>
      <AuthorSectionInnerWrapper>
        <SectionTitle id="authors_carousel">Autorky a autoři sborníku</SectionTitle>
        <GridWrapper
          style={{
            minHeight: showCarousel ? '10rem' : '50rem',
            maxHeight: showCarousel ? '30rem' : '150rem',
          }}
        >
          {showCarousel ? (
            <Carousel />
          ) : (
            <Grid>
              {authors.map((author) => (
                <Card key={`${author.name}`} author={author} />
              ))}
            </Grid>
          )}
        </GridWrapper>
        <UnrollButton onClick={() => setShowCarousel(!showCarousel)}>
          {showCarousel ? 'Zobrazit vše' : 'Sbalit'}
          <Chevron direction={showCarousel ? 'down' : 'up'} />
        </UnrollButton>
      </AuthorSectionInnerWrapper>
    </AuthorSectionOuterWrapper>
  );
};
