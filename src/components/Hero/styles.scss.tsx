// Sidebar Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

// Constants
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const HeroContainer = styled(Box)`
  /* overflow: hidden; */

  .slick-slider {
    .slick-arrow {
      &.slick-prev {
        position: absolute;
        right: 6rem;
        top: 2rem;

        z-index: 999;
      }
      &.slick-next {
        position: absolute;
        right: 2rem;
        top: 2rem;

        z-index: 999;
      }
    }

    .img {
      @media (min-width: calc(${theme.breakpoints[2]} + 1px)) {
        height: 50vh;
      }
    }
  }

  .arrow-prev {
    transform: rotate(90deg);
    svg {
    }
  }
`

//////////////////////////////////////////////////////////////////////
// End Styles
