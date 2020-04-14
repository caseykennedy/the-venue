// Button Styles:

// Imports
// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { lighten } from 'polished'

// Constants
import theme from '../../../config/theme'

// Elements
import { Btn } from '../../elements'

// Begin Styles
// ___________________________________________________________________

export const ButtonStyles = styled(Btn)`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  transition: ${theme.transition.string};

  &:hover {
    background: ${theme.colors.secondary};
    color: ${lighten(0.1, `${theme.colors.accent}`)};
  }
`

// ___________________________________________________________________
// End Styles
