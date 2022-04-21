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
      // MuiTextField: {
      //   defaultProps: {
      //     variant: 'outlined',
      //     fullWidth: true,
      //   },
      // },
      // MuiTypography: {
      //   defaultProps: {
      //     variantMapping: {
      //       h1: 'div',
      //       h2: 'div',
      //       h3: 'div',
      //       h4: 'div',
      //       h5: 'div',
      //       h6: 'div',
      //       subtitle1: 'div',
      //       subtitle2: 'div',
      //       body1: 'div',
      //       body2: 'div',
      //       caption: 'p',
      //     },
      //   },
      // },
      // MuiCssBaseline: {
      //   styleOverrides: {
      //     '@global': {
      //       '@font-face': 'Sans-serif',
      //       html: {
      //         WebkitFontSmoothing: 'antialiased',
      //         MozOsxFontSmoothing: 'grayscale',
      //         boxSizing: 'border-box',
      //       },
      //       '*, *::before, *::after': {
      //         boxSizing: 'inherit',
      //       },
      //       body: {
      //         margin: 0,
      //       },
      //     },
      //   },
      // },
      // MuiDialog: {
      //   defaultProps: {
      //     fullWidth: true,
      //   },
      //   styleOverrides: {
      //     root: {
      //       fontFamily: 'Noto Sans JP',
      //     },
      //   },
      // },
      // MuiDialogTitle: {
      //   styleOverrides: {
      //     root: {
      //       textAlign: 'center',
      //       marginTop: 30,
      //       padding: 0,
      //       ...typography.h2,
      //     },
      //   },
      // },
      // MuiDialogContentText: {
      //   styleOverrides: {
      //     root: {
      //       width: '100%',
      //       maxWidth: 315,
      //       margin: '0 auto',
      //       marginTop: 18,
      //       textAlign: 'center',
      //       ...typography.subtitle1,
      //     },
      //   },
      // },
      // MuiDialogContent: {
      //   styleOverrides: {
      //     root: {
      //       width: '100%',
      //       maxWidth: 315,
      //       margin: '0 auto',
      //       overflowY: 'visible',
      //       padding: '8px 24px',
      //       ...typography.body2,
      //     },
      //   },
      // },
      // MuiDialogActions: {
      //   styleOverrides: {
      //     root: {
      //       justifyContent: 'space-between',
      //       width: '100%',
      //       maxWidth: 315,
      //       margin: '15px auto 30px auto',
      //       '& > button:only-child': {
      //         margin: '0 auto',
      //       },
      //     },
      //   },
      // },
      // MuiOutlinedInput: {
      //   styleOverrides: {
      //     root: {
      //       borderRadius: 4,
      //     },
      //   },
      // },
      // MuiPaper: {
      //   styleOverrides: {
      //     rounded: {
      //       borderRadius: 15,
      //     },
      //     elevation1: {
      //       boxShadow: 'none',
      //     },
      //   },
      // },
      // MuiIconButton: {
      //   styleOverrides: {
      //     root: {
      //       // color: 'black',
      //     },
      //   },
      // },
      // MuiAccordion: {
      //   styleOverrides: {
      //     rounded: {
      //       '&:last-child': {
      //         borderBottomLeftRadius: 0,
      //         borderBottomRightRadius: 0,
      //         borderBottom: '1px solid #677D9B',
      //       },
      //     },
      //   },
      // },
      // MuiAccordionSummary: {
      //   styleOverrides: {
      //     root: {
      //       paddingLeft: 0,
      //     },
      //     content: {
      //       margin: '24px 0',
      //     },
      //   },
      // },
      // MuiInputLabel: {
      //   styleOverrides: {
      //     shrink: {
      //       fontWeight: 'bold',
      //       color: 'black',
      //     },
      //   },
      // },
      // MuiTableCell: {
      //   styleOverrides: {
      //     stickyHeader: {
      //       backgroundColor: '#fafafa',
      //     },
      //   },
      // },
      // MuiTableRow: {
      //   styleOverrides: {
      //     root: {
      //       '&:hover, &:hover td': {
      //         backgroundColor: '#fafafa',
      //       },
      //     },
      //   },
      // },
      // MuiTooltip: {
      //   styleOverrides: {
      //     tooltip: {
      //       backgroundColor: '#fafafa',
      //       border: '1px solid #E6E8ED',
      //       color: '#4A4A4A',
      //       fontSize: 10,
      //       minHeight: 20,
      //       display: 'flex',
      //       alignItems: 'center',
      //     },
      //     arrow: {
      //       '&:before': {
      //         border: '1px solid #E6E8ED',
      //       },
      //       color: '#fafafa',
      //     },
      //   },
      // },
      // MuiTab: {
      //   styleOverrides: {
      //     root: {
      //       textDecoration: 'none',
      //       textTransform: 'none',
      //     },
      //   },
      // },
    }
  });
