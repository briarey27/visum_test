import MUIProvider from '@/providers/themeProvider/MUIProvider';
import { ReactNode } from 'react';
import { StoreProvider } from '@/providers/storeProvider';

const AppProviders = ({ children }: { children: ReactNode }) => (
  <MUIProvider>
    <StoreProvider>{children}</StoreProvider>
  </MUIProvider>
);

export default AppProviders;
