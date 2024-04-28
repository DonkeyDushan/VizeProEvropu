import { useEffect, useState } from 'react';
import { Button, ButtonsWrapper, CarouselWrapper, Slider, Wrapper } from './styledComponents';
import { authors } from 'app/content/authors';
import { Card } from './Card';

export const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? authors.length - 3 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex > authors.length - 3 ? 0 : newIndex);
  };

  useEffect(() => {
    const timeoutFunction = setTimeout(() => handleNext(), 5000);
    return () => clearTimeout(timeoutFunction);
  }, [index]);

  console.log(index);

  return (
    <Wrapper id="authors_carousel">
      <CarouselWrapper>
        <Slider
          style={{
            gridTemplateColumns: `repeat(${authors.length}, 1fr)`,
            width: `${authors.length * 33.33}%`,
            translate: `${-(index * (100 / authors.length))}%`,
          }}
        >
          {authors.map((author) => (
            <Card key={`${author.name}`} author={author} />
          ))}
        </Slider>
      </CarouselWrapper>

      <ButtonsWrapper>
        <Button onClick={handlePrevious}>{'<'}</Button>
        <Button onClick={handleNext}>{'>'}</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
