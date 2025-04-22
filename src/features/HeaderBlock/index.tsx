import { Stack, Link, Paper } from '@mui/material';
import { ReactNode } from 'react';

export const HeaderBlock = ({ children }: { children: ReactNode }) => {
  return (
    <Paper elevation={2} square={false} sx={{ p: 2 }}>
      <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
        <Link href={'/'} variant={'subtitle1'}>
          Назад
        </Link>
        {children}
      </Stack>
    </Paper>
  );
};
