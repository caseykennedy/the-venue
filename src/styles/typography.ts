// Typography styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import { css } from 'styled-components'

// Constants
import theme from '../../config/theme'

// Aeonik Regular
import AeonikRegularEot from './fonts/AeonikRegular.eot'
import AeonikRegularWoff2 from './fonts/AeonikRegular.woff2'
import AeonikRegularWoff from './fonts/AeonikRegular.woff'
import AeonikRegularOtf from './fonts/AeonikRegular.otf'

// Begin
//////////////////////////////////////////////////////////////////////

const Typography = css`
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikRegularEot});
    src: url(${AeonikRegularWoff2}) format('woff2'),
      url(${AeonikRegularWoff}) format('woff'),
      url(${AeonikRegularOtf}) format('opentype'),
      url(${AeonikRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: ${theme.colors.accent};
  }
  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};

    border: 0;
    margin: 0;
    padding: 0;

    font-size: ${theme.root.font.baseSize};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.normal};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-font-feature-settings: 'pnum';
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${theme.fontWeights.normal};
    line-height: ${theme.root.font.headingLineHeight};
    margin: 0 0 1.75rem;
    transition: ${theme.transition.string};
  }
  .text--xxxl {
    font-size: ${theme.root.font.xxxl};
  }
  h1,
  .text--xxl {
    font-size: ${theme.root.font.xxl};
  }
  h2,
  .text--xl {
    font-size: ${theme.root.font.xl};
  }
  h3,
  .text--lg {
    font-size: ${theme.root.font.lg};
  }
  h4,
  .text--md {
    font-size: ${theme.root.font.md};
  }
  .text--sm,
  small {
    font-size: ${theme.root.font.sm};
  }
  .text--xs {
    font-size: ${theme.root.font.xs};
  }
  p {
    font-size: 1.125em;
    line-height: ${theme.root.font.bodyLineHeight};
    margin-bottom: 1.25em;

    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    transition: ${theme.transition.string};
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${theme.colors.accent};
    }
  }
`

export default Typography

//////////////////////////////////////////////////////////////////////
// End
