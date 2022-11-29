import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF4D4',
    },
    secondary: {
      main: '#757575',
    },
    error: {
      main: '#F87171',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'right',
          margin: '8px',
        },
      },
    },
  },
});

export default theme;
