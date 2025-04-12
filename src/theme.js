import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
    h6: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#3a506b',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5bc0be',
      contrastText: '#1c2541',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: theme.palette.background.default,
          transition: 'background-color 0.3s ease',
        },
      }),
    },
  },
  shape: {
    borderRadius: 12,
  },
});