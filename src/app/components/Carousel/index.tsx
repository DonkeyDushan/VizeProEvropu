import { useCallback, useEffect, useState } from 'react';
import {
  Button,
  ButtonsWrapper,
  CarouselWrapper,
  Grid,
  Slider,
  UnrollButton,
  Wrapper,
} from './styledComponents';
import { authors } from 'app/content/authors';
import { Card } from './Card';
import { Chevron } from '../Chevron';

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(true);
  const [showCarousel, setShowCarousel] = useState(true);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? authors.length - 3 : newIndex);
  };

  const handleNext = useCallback(() => {
    if (play) {
      const newIndex = index + 1;
      setIndex(newIndex > authors.length - 3 ? 0 : newIndex);
    }
  }, [index, play]);

  useEffect(() => {
    const timeoutFunction = setTimeout(handleNext, 5000);
    return () => clearTimeout(timeoutFunction);
  }, [index, play]);

  console.log(play);

  return (
    <Wrapper id="authors_carousel">
      <CarouselWrapper>
        {showCarousel ? (
          <Slider
            style={{
              gridTemplateColumns: `repeat(${authors.length}, 1fr)`,
              width: `${authors.length * 33.33}%`,
              translate: `${-(index * (100 / authors.length))}%`,
            }}
            onMouseEnter={() => setPlay(false)}
            onMouseLeave={() => setPlay(true)}
          >
            {authors.map((author) => (
              <Card key={`${author.name}`} author={author} />
            ))}
          </Slider>
        ) : (
          <Grid>
            {authors.map((author) => (
              <Card key={`${author.name}`} author={author} />
            ))}
          </Grid>
        )}
      </CarouselWrapper>

      {showCarousel && (
        <ButtonsWrapper>
          <Button onClick={handlePrevious}>
            <Chevron direction="left" />
          </Button>
          <Button onClick={handleNext}>
            <Chevron direction="right" />
          </Button>
        </ButtonsWrapper>
      )}
      <UnrollButton onClick={() => setShowCarousel(!showCarousel)}>
        {showCarousel ? 'Zobrazit vše' : 'Sbalit'}
        <Chevron direction={showCarousel ? 'down' : 'up'} />
      </UnrollButton>
    </Wrapper>
  );
};
