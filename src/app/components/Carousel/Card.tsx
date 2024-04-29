import { IAuthors } from 'app/content/authors';
import { CardTitle, CardWrapper } from './styledComponents';

export const Card = ({ author }: { author: IAuthors }) => {
  return (
    <CardWrapper>
      <CardTitle>{author?.name}</CardTitle>
      <p>{author?.text}</p>
    </CardWrapper>
  );
};
