import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Button,
  ButtonsWrapper,
  CarouselWrapper,
  /*  CarouselWrapper, */ Slider,
  Wrapper,
} from './styledComponents';
import { authors } from 'app/content/authors';
import { Card } from './Card';
import { Chevron } from '../Chevron';
import { breakpoints } from 'app/theme/breakpoints';

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | undefined>(undefined);

  const screenWidth = window.screen.width;
  const authorsGrid = () => {
    if (screenWidth < breakpoints.sm) return authors.length * 100;
    if (screenWidth < breakpoints.md) return authors.length * 50;
    else return authors.length * 33.33;
  };

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

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.changedTouches[0].screenX);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    handleSwipe(event.changedTouches[0].screenX);
  };

  const handleSwipe = (touchEndX: number) => {
    if (touchStartX && touchEndX) {
      const deltaX = touchEndX - touchStartX;
      if (deltaX > 50) {
        handlePrevious();
      } else if (deltaX < -50) {
        handleNext();
      }
    }
  };

  useEffect(() => {
    const timeoutFunction = setTimeout(handleNext, 5000);
    return () => clearTimeout(timeoutFunction);
  }, [index, play]);

  return (
    <Wrapper onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <CarouselWrapper>
        <Slider
          style={{
            gridTemplateColumns: `repeat(${authors.length}, 1fr)`,
            width: `${authorsGrid()}%`,
            translate: `${-(index * (100 / authors.length))}%`,
          }}
          onMouseEnter={() => setPlay(false)}
          onMouseLeave={() => setPlay(true)}
          onClick={() => setPlay(!play)}
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
