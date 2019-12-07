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
      background: ${theme.colors.secondary};
      color: transparent;
      border: 0;
      cursor: pointer;
      width: calc(${theme.root.space} / 2.5);
      height: calc(${theme.root.space} / 2.5);

      &.slick-prev {
        position: absolute;
        right: calc((${theme.root.space} / 2) + (${theme.root.space} / 4));
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
        height: 60vh;
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
