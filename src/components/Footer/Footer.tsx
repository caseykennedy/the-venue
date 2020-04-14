// Section:
// Box and Flex layout components using Styled System

// Imports
// ___________________________________________________________________

// Core
import * as React from 'react'

// Components
import Logo from '../Logo'

// Elements
import { Box, Flex, Text } from '../../elements'

// Config
import theme from '../../../config/theme'

// Begin Component
// ___________________________________________________________________

interface Props {}

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.SFC = () => {
  return (
    <Box as="footer" width={1} pt={8} pb={4} bg="black" color="white">
      <Flex flexWrap="wrap" width={1} px={theme.gutter} m="0 auto">
        <Text>&copy; {Year()}</Text>
      </Flex>
    </Box>
  )
}

export default Footer
