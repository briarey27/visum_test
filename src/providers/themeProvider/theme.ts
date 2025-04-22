'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  cssVariables: true,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#dceafa',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
