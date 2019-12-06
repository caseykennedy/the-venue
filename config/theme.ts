// Theme / Design system:

// Types
//////////////////////////////////////////////////////////////////////

interface ThemeShape {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  colors: {
    [key: string]: string | string[]
  }
  space: string[]
  gutter: number[]
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  Heading: {
    [key: string]: string
  }
  fontWeights: {
    [key: string]: number
  }
  maxWidth: number
  sidebarWidth: {
    [key: string]: string
  }
  transition: {
    [key: string]: string
  }
  root: {
    size: string
    font: {
      [key: string]: string
    }
  }
}

// Begin theme
//////////////////////////////////////////////////////////////////////

const breakpoints: string[] = ['376px', '769px', '1025px']
// Aliases - FUTURE ENHANCEMENT
// breakpoints.xs = breakpoints[0];
// breakpoints.sm = breakpoints[1];
// breakpoints.md = breakpoints[2];
// breakpoints.lg = breakpoints[3];

const theme: ThemeShape = {
  // Breakpoints
  ////////////////////////////////////////////////////////////////////

  breakpoints,
  mq: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`
  },

  // Color palette
  ////////////////////////////////////////////////////////////////////

  colors: {
    body: '#ffffff',
    text: '#ffffff',
    background: '#131313',
    
    primary: '#FED2BC',
    secondary: '#ffffff',
    tertiary: '#ebebeb',

    highlight: '#f5f6fb',
    accent: '#FED2BC',
    sidebar: '#000000',

    black: '#000000',
    white: '#ffffff',

    shades: [
      '#2e2e31',
      '#7b7a7d',
      '#a5a5a6',
      '#bbbbbc',
      '#d1d0d2',
      '#e8e7e8'
    ]
  },

  // Space
  ////////////////////////////////////////////////////////////////////

  space: [
    '0', // 0
    '0.25rem', // 1
    '0.5rem', // 2
    '1rem', // 3
    '1.5rem', // 3
    '2rem', // 4
    '4rem', // 5
    '8rem', // 6
    '10rem', // 7
    '12rem', // 8
    '14rem', // 9
    '16rem' // 10
  ],

  gutter: [3, 3, 4],

  // Typography
  ////////////////////////////////////////////////////////////////////

  fonts: {
    body: `"Aeonik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `"AktivReg", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    code: `"Menlo", Consolas, "Liberation Mono", Menlo, Courier, monospace`
  },

  fontSizes: [
    'var(--text-xs)',
    'var(--text-sm)',
    'var(--text-base-size)',
    'var(--text-md)',
    'var(--text-lg)',
    'var(--text-xl)',
    'var(--text-xxl)',
    'var(--text-xxxl)',
  ],

  Heading: {
    fontWeight: '400'
  },

  fontWeights: {
    normal: 400,
  },

  // Base
  ////////////////////////////////////////////////////////////////////

  maxWidth: 1680,

  sidebarWidth: {
    big: '190px',
    normal: '200px',
  },

  transition: {
    string: 'all 0.37s ease'
  },

  root: {
    size: 'var(--root-size)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',
      baseLetterSpacing: 'var(--text-base-letter-spacing)',
  
      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',
  
      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)'
    }
  }
}

export default theme
