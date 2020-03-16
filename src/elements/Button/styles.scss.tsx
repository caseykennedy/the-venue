// Button Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components'
import { lighten } from 'polished'

// Constants
import theme from '../../../config/theme'

// Elements
import { Btn } from '../../elements'

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ButtonStyles = styled(Btn)`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  transition: ${theme.transition.string};

  &:hover {
    background: ${theme.colors.secondary};
    color: ${lighten(0.1, `${theme.colors.accent}`)};
  }
`

//////////////////////////////////////////////////////////////////////
// End Styles
