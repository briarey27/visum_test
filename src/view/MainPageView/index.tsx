import { Stack, Typography } from '@mui/material';
import { PostsList } from '@/features/PostsList';

export const MainPageView = () => {
  return (
    <Stack direction={'column'} gap={2} sx={{ height: 'calc(100vh - 32px)', position: 'relative' }}>
      <Typography
        fontWeight={'bold'}
        color={'primary'}
        variant="h3"
        component={'h1'}
        sx={{ position: 'fixed' }}
      >
        Posts
      </Typography>
      <Stack
        mt={8}
        flexGrow={1}
        sx={{
          overflowY: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <PostsList />
      </Stack>
    </Stack>
  );
};
