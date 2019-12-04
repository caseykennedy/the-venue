// Global styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import { createGlobalStyle } from 'styled-components'

// Styles
import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}
`

export default GlobalStyles
