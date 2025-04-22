import { Post } from '@/serverActions/types';
import { Link, Paper, Stack, Typography } from '@mui/material';
import { memo } from 'react';

interface IProps {
  post: Post;
}

const Component = ({ post }: IProps) => {
  return (
    <Paper
      elevation={2}
      square={false}
      sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Stack direction={'row'} gap={1}>
        <Typography fontWeight={'bold'} color={'primary'} variant="subtitle1" lineHeight={1.2}>
          {post.id}
        </Typography>
        <Typography color={'textPrimary'} variant="subtitle1" component="h2" lineHeight={1.2}>
          {post.title}
        </Typography>
      </Stack>

      <Typography mt={1} noWrap={true} color={'textSecondary'} variant={'body1'}>
        {post.body}
      </Typography>
      <Stack flexGrow={1} alignSelf={'end'} justifyContent={'end'}>
        <Link variant={'subtitle1'} href={`/${post.id}`}>
          Просмотр
        </Link>
      </Stack>
    </Paper>
  );
};
export const PostCard = memo(Component);
