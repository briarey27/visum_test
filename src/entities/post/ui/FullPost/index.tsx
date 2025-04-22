import { Paper, Stack, Typography } from '@mui/material';

interface IProps {
  body: string;
  title: string;
}

export const FullPost = ({ body, title }: IProps) => {
  return (
    <Paper elevation={2} square={false} sx={{ p: 2 }}>
      <Stack direction={'column'} gap={1}>
        <Typography fontWeight={'bold'} color={'primary'} variant="h3" component={'h1'}>
          {title}
        </Typography>
        <Typography color={'textPrimary'} variant="body1" sx={{ mt: 4 }}>
          {body}
        </Typography>
      </Stack>
    </Paper>
  );
};
