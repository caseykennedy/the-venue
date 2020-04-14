// Home Styles:

// Imports
// ___________________________________________________________________

// Core
import styled from 'styled-components'

// Constants
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
// ___________________________________________________________________

export const List = styled.ul`

  li {
    font-size: ${theme.fontSizes[3]};
    display: inline-block;
    padding: ${theme.space[2]} 0;
    width: 50%;

    @media (min-width: calc(${theme.breakpoints[1]} + 1px)) {
      font-size: ${theme.fontSizes[5]};
      width: 33%;
    }
  }
`

export const MountContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 8rem;
  overflow: hidden;

  svg {
    fill: #485763;
    transform: scale(2);
  }
`

// ___________________________________________________________________
// End Styles
