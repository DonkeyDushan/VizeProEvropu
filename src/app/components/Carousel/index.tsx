import { useCallback, useEffect, useState } from 'react';
import { Button, ButtonsWrapper, CarouselWrapper, Slider, Wrapper } from './styledComponents';
import { authors } from 'app/content/authors';
import { Card } from './Card';
import { Chevron } from '../Chevron';

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(true);

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

  return (
    <Wrapper>
      <CarouselWrapper>
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
      </CarouselWrapper>

      <ButtonsWrapper>
        <Button onClick={handlePrevious}>
          <Chevron direction="left" />
        </Button>
        <Button onClick={handleNext}>
          <Chevron direction="right" />
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
