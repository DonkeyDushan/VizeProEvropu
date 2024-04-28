import { IAuthors } from 'app/content/authors';
import { CardTitle, CardWrapper, PhotoWrapper } from './styledComponents';

export const Card = ({ author }: { author: IAuthors }) => {
  return (
    <CardWrapper>
      <PhotoWrapper>
        <img src={author?.photoUrl} />
      </PhotoWrapper>
      <CardTitle>{author?.name}</CardTitle>
      <p>{author?.text}</p>
    </CardWrapper>
  );
};
