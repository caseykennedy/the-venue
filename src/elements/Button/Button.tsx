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
  type: 'reset' | 'button' | 'submit' | undefined
  value: string
}

const Button: React.SFC<Props> = ({ children, type, value }) => {
  return (
    <ButtonStyles type={type} value={value} px={5} py={3}>
      {children}
    </ButtonStyles>
  )
}

export default Button

//////////////////////////////////////////////////////////////////////
// End
