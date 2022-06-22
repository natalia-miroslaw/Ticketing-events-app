import { createTheme, PaletteOptions, Theme } from '@mui/material';
import { typography } from './Typography';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    customGreen: Palette['primary'];
    customRed: Palette['primary'];
    custom: {
      grey: string;
      darkGrey: string;
      darkestGrey: string;
      lightGrey: string;
      lightestGrey: string;
      blue: string;
    };
  }
  interface PaletteOptions {
    customRed: PaletteOptions['primary'];
    customGreen: PaletteOptions['primary'];
    custom: {
      grey: string;
      darkGrey: string;
      darkestGrey: string;
      lightGrey: string;
      lightestGrey: string;
      blue: string;
    };
  }
  interface Palette {
    customGray: Palette['primary'];
  }
  interface PaletteOptions {
    customGray: PaletteOptions['primary'];
  }
}

export const defaultPrimaryColor = '#E79231';

export const palette = (color = defaultPrimaryColor): PaletteOptions => ({
  primary: {
    main: color
  },
  secondary: {
    main: '#e74357'
  },
  background: {
    default: '#f9f9f9'
  },
  customRed: {
    main: '#FD4041',
    light: 'rgba(253, 64, 65, 0.1)'
  },
  customGreen: {
    main: '#00A091',
    light: 'rgba(56, 228, 137, 0.1)'
  },
  custom: {
    grey: '#3D3D3D',
    darkGrey: '#595959',
    darkestGrey: '#111111',
    lightGrey: '#EDEDED',
    lightestGrey: '#fafafa',
    blue: '#0052FF'
  },
  customGray: {
    main: '#474747',
    light: 'rgba(17, 17, 17, 0.4)'
  }
});

export const theme = (color = defaultPrimaryColor): Theme =>
  createTheme({
    palette: palette(color),
    typography,
    components: {
      MuiButton: {
        defaultProps: {
          type: 'button'
        },
        styleOverrides: {
          sizeSmall: {
            height: 32
          },
          root: {
            height: 32,
            ...typography.body1
          },
          contained: {
            color: 'white',
            '&:disabled': {
              backgroundColor: 'darkgrey',
              color: 'white'
            }
          },
          outlinedSizeLarge: {},
          outlined: {
            border: '1px solid lightgrey',
            textTransform: 'none',
            fontFamily: 'Noto Sans JP'
          },
          text: {
            padding: '9px 35px',
            border: 'solid 1px transparent',
            fontSize: '0.688rem',
            borderRadius: 30,
            textTransform: 'none',
            whiteSpace: 'nowrap'
          }
        }
      }
    }
  });
