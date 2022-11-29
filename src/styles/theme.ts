import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF4D4',
    },
    secondary: {
      main: '#61dafb',
    },
    error: {
      main: '#F87171',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          margin: '8px',
          variant: 'body2',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
