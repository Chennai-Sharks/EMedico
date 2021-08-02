import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#C21D1D',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
