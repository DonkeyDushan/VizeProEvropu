import {
  AuthorSectionInnerWrapper,
  AuthorSectionOuterWrapper,
  SectionTitle,
  UnrollButton,
} from 'app/components/AuthorsSection';
import { Carousel } from 'app/components/Carousel';
import { Card } from 'app/components/Carousel/Card';
import { Grid, GridWrapper } from 'app/components/Carousel/styledComponents';
import { Chevron } from 'app/components/Chevron';
import { authors } from 'app/content/authors';
import { breakpoints } from 'app/theme/breakpoints';
import { useState } from 'react';

export const AuthorsSection = () => {
  const [showCarousel, setShowCarousel] = useState(true);
  const screenWidth = window.screen.width;
  const calcMaxHeight = () => {
    if (screenWidth < breakpoints.sm) return authors.length * 25;
    if (screenWidth < breakpoints.md) return (authors.length / 2) * 25;
    else return (authors.length / 3) * 25;
  };
  return (
    <AuthorSectionOuterWrapper>
      <AuthorSectionInnerWrapper>
        <SectionTitle id="authors_carousel">Autorky a autoři sborníku</SectionTitle>
        <GridWrapper
          style={{
            minHeight: showCarousel ? '10rem' : '25rem',
            maxHeight: showCarousel ? '25rem' : `${calcMaxHeight()}rem`,
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
