// Button:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'
import Link from 'gatsby'

// Config
import theme from '../../../config/theme'

// Styles
import { ButtonStyles } from './styles.scss'

// Begin Component
//////////////////////////////////////////////////////////////////////

interface Props {
  children: React.ReactNode
}

const Button: React.SFC<Props> = ({ children }) => {
  return (
    <ButtonStyles px={5} py={3}>
      {children}
    </ButtonStyles>
  )
}

export default Button

//////////////////////////////////////////////////////////////////////
// End
