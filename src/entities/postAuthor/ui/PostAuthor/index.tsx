import { Stack, Typography } from '@mui/material';

interface IProps {
  authorName: string;
}

export const PostAuthor = ({ authorName }: IProps) => {
  return (
    <Stack direction={'row'} gap={1}>
      <Typography color={'textSecondary'} variant="subtitle1">
        Автор
      </Typography>
      <Typography fontWeight={'bold'} color={'textPrimary'} variant="subtitle1">
        {authorName}
      </Typography>
    </Stack>
  );
};
