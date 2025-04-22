import { UserPost } from '@/serverActions/types';
import { Stack } from '@mui/material';
import { HeaderBlock } from '@/features/HeaderBlock';
import { PostAuthor } from '@/entities/postAuthor/ui/PostAuthor';
import { FullPost } from '@/entities/post/ui/FullPost';

interface IProps {
  post: UserPost;
}

export const CurrentPostView = ({ post }: IProps) => {
  const { user, body, title } = post;
  return (
    <Stack direction={'column'} gap={2}>
      <HeaderBlock>
        <PostAuthor authorName={user.name} />
      </HeaderBlock>
      <FullPost body={body} title={title} />
    </Stack>
  );
};
