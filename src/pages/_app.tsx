import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider, Theme } from '@mui/material';
import createCache from '@emotion/cache';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});
declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    layout: {
      grey: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      offBlack: string;

      offWhite: string;
    };
  }
}
const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
const theme: Theme = createTheme({
  typography: (pallete) => ({
    h1: {
      fontFamily: 'RobotoSlab, Arial',
      color: pallete.primary.main,
      fontSize: '36px',
      letterSpacing: '8.4px',
      verticalAlign: 'middle',
      fontWeight: 'bolder',
      [defaultTheme.breakpoints.down('md')]: {
        // lineHeight: 1,
      },
    },
    // h2: {
    //   color: pallete.common.layout.offBlack,
    //   fontSize: '14px',
    //   letterSpacing: '4.2px',
    //   fontWeight: 'bold',
    //   textTransform: 'uppercase',
    //   // lineHeight: 1,
    //   [defaultTheme.breakpoints.down('md')]: {
    //     fontSize: '12px',
    //   },
    // },
    h3: {
      color: pallete.primary.main,
      fontSize: '14px',
      letterSpacing: '4.2px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      // lineHeight: 1,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '12px',
      },
    },
    h5: {
      color: pallete.primary.main,
      fontSize: '14px',
      // letterSpacing: '4.2px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      // lineHeight: 1,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '12px',
      },
    },
    subtitle1: {
      letterSpacing: '1.4px',
      fontSize: '14px',
      color: pallete.primary.main,
      // lineHeight: 1,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '10px',
      },
    },
    fontFamily: ['RobotoSlab, Arial'].join(','),
  }),
  shape: {
    borderRadius: 20,
  },
  palette: {
    primary: {
      // light: '#DF1E31',
      main: '#C9172C',
      dark: '#71000D',
      contrastText: '#FFF',
    },
    secondary: {
      // light: '#F4CCE1',
      main: '#0DC753',
      // dark: '#821643',
      contrastText: '#FFF',
    },
    common: {
      layout: {
        grey: {
          lighter: '#F0F0F0',
          light: '#D6D6D6',
          main: '#A2A2A2',
          dark: '#727272',
        },
        offBlack: '#222831',
        offWhite: '#F5F6F6',
      },
    },
    grey: {
      A700: '#727272',
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return <CacheProvider value={muiCache}>
    <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
  </CacheProvider>

}
