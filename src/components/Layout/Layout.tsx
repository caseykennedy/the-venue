// Layout:
// TODO: create hook for siteMetaData

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'

// Libraries
import { ThemeProvider } from 'styled-components'

// Hooks
import useNavigation from '../../hooks/useNavigation'

// Componentns
import Sidebar from '../Sidebar'
import { Icon } from '../Icons'

// Elements
import { Box, Flex, Text } from '../../elements'

// Theme
import theme from '../../../config/theme'
import GlobalStyles from '../../styles/global'

// Styles
import { Wrapper, Main, Footer } from './styles.scss'

// Begin
//////////////////////////////////////////////////////////////////////

const Year = () => {
  return new Date().getFullYear()
}

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  // Navigation data hook
  const navData = useNavigation()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Sidebar color="black" navData={navData} />
        <Main>{children}</Main>
        <Footer>
          <Box p={[4]}>
            <Icon name="instagram" />
            <Icon name="facebook" />
            <Icon name="twitter" />
            <Text fontSize={1} mt={3}>
              &copy; {Year()}
              <br />
              Site by{' '}
              <a href="//caseykennedy.me" target="_blank">
                ck
              </a>
            </Text>
          </Box>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout

//////////////////////////////////////////////////////////////////////
// End

// interface RenderData {
//   site: {
//     siteMetadata: {
//       title: string
//       description: string
//     }
//   }
// }

// const useSiteMetadata = () => {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `
//   )
//   return site.siteMetadata
// }
