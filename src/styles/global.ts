// Global styles

// Imports
// ___________________________________________________________________

// Core
import { createGlobalStyle } from 'styled-components'

// Constants
import theme from '../../config/theme'

// Styles
import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}
  
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};

    border: 0;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export default GlobalStyles
