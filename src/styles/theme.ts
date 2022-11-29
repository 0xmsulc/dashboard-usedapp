import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF4D4',
    },
    secondary: {
      main: '#19857b',
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
        },
      },
    },
  },
});

export default theme;