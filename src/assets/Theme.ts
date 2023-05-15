import { createTheme } from '@mui/material/styles';

const aqua = '#a3dfff'
const purple = '#c8a3ff'

export const theme = createTheme({
  palette: {
    text: {
      primary: '#704648'
    },
    mode: 'light',
    primary: {
      main: aqua,
      dark: '#466170',
      contrastText: '#fff'
    },
    secondary: {
      main: purple,
      dark: '#5d4a78',
      contrastText: '#fff'
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true
      },
      styleOverrides: {
        root: ({ ownerState, theme}) => ({
          transition: 'all 150ms',
          borderRadius: '2px',
          fontWeight: 600,
          textTransform: 'none',
          margin: '4px',
          position: 'relative',          
          ':active': {
            '&::after': {
              content: '""',
              border: `2px solid ${getColor(ownerState, theme)}`,
              position: 'absolute',
              height: 'calc(100% + 4px)',
              width: 'calc(100% + 4px)',
              borderRadius: '2px'
            }
          }
        }),
      }
    }
  },
});

const getColor = (state: any, theme: any) => {
  const color = state.color || "primary"
  const dark = state.dark ? "dark" : "light"
  return theme.palette[color][dark]
}