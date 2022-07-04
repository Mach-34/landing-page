import { CSSProperties } from 'react';

export const breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1240,
  xl: 1800,
};

// export type ColorVariant =
//   | 'electric100'
//   | 'electric200'
//   | 'electric250'
//   | 'electric300'
//   | 'electric400'
//   | 'electric500'
//   | 'electric600'
//   | 'electric700'
//   | 'gray0'
//   | 'gray50'
//   | 'gray100'
//   | 'gray200'
//   | 'gray300'
//   | 'gray400'
//   | 'gray600'
//   | 'gray800'
//   | 'gray900'
//   | 'green100'
//   | 'green300'
//   | 'green400'
//   | 'red100'
//   | 'red400'
//   | 'yellow100'
//   | 'yellow400';

export type TypographyVariant =
  | 'text1'
  | 'text2'
  | 'text3'
  | 'text4'
  | 'text5'
  | 'text6'
  | 'text7'
  | 'body1'
  | 'body2'
  | 'body3';

// type ColorVariantMap = { [key in ColorVariant]: string };
type TypographyVariantMap = { [key in TypographyVariant]: CSSProperties };

export type RigorTheme = {
  breakpoints: { [key: string]: number };
  typography: {
    paragraph: TypographyVariantMap;
    ui: TypographyVariantMap;
  };
};

// export const color: ColorVariantMap = {
//   electric100: '#F5F6FF',
//   electric200: '#E6E8FF',
//   electric250: '#B4BBFE',
//   electric300: '#6A79FD',
//   electric400: '#2137FC',
//   electric500: '#0317CE',
//   electric600: '#021194',
//   electric700: '#020C65',
//   gray0: '#FFFFFF',
//   gray50: '#F9FAFB',
//   gray100: '#F3F4F6',
//   gray200: '#E5E7EB',
//   gray300: '#E4EAF1',
//   gray400: '#9CA3AF',
//   gray600: '#4B5563',
//   gray800: '#1F2937',
//   gray900: '#111827',
//   green100: '#F6FEF7',
//   green300: '#1AB229',
//   green400: '#0FA41E',
//   red100: '#FFF5F5',
//   red400: '#FA0F17',
//   yellow100: '#FFFBF5',
//   yellow400: '#FFB01A',
// };

export const paragraph: TypographyVariantMap = {
  text1: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '140%',
  },
  text2: {
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: '140%',
  },
  text3: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '140%',
  },
  text4: {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '140%',
  },
  text5: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '140%',
  },
  text6: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '140%',
  },
  text7: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '140%',
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '140%',
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '140%',
  },
  body3: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '140%',
  },
};

export const ui: TypographyVariantMap = {
  text1: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '100%',
  },
  text2: {
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: '100%',
  },
  text3: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '100%',
  },
  text4: {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '100%',
  },
  text5: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '100%',
  },
  text6: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '100%',
  },
  text7: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '100%',
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '100%',
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '100%',
  },
  body3: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '100%',
  },
};

export const theme: RigorTheme = {
  // color,
  breakpoints,
  typography: {
    paragraph,
    ui,
  },
};
