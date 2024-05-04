import { IAuthors } from 'app/content/authors';
import { CardTitle, StyledCard } from './styledComponents';

export const Card = ({ author }: { author: IAuthors }) => {
  return (
    <StyledCard>
      <CardTitle>{author?.name}</CardTitle>
      <p>{author?.text}</p>
    </StyledCard>
  );
};
