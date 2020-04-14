// Root variables

// Imports
// ___________________________________________________________________

// Core
import { css } from 'styled-components'

// Constants
import theme from '../../config/theme'

// Begin
// ___________________________________________________________________

const RootVariables = css`
  :root {
    --root-size: 6rem;

    /* -------------------------------- 
    Typography
    -------------------------------- */

    /* --font-body: ${theme.fonts.body};
    --font-heading: ${theme.fonts.heading};
    --font-code: ${theme.fonts.code}; */

    /* set base values */
    --text-base-size: 1em;
    --text-scale-ratio: 1.2;
    --text-base-letter-spacing: 0.5px;

    /* type scale */
    --text-xs: calc(1em / (var(--text-scale-ratio) * var(--text-scale-ratio)));
    --text-sm: calc(1em / var(--text-scale-ratio));
    --text-md: calc(1em * var(--text-scale-ratio));
    --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xxxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));

    /* line-height */
    --heading-line-height: 1.25;
    --body-line-height: 1.45;
  }

  ${theme.mq.medium} {
    :root {
      --root-size: 8rem;
      --text-base-size: 1.125em;
    }
  }
`

export default RootVariables

// ___________________________________________________________________
// End
