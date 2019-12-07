// Layout:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import 'typeface-work-sans'
import theme from '../../../config/theme'
import GlobalStyles from '../../styles/global'

// Componentns
import Sidebar from '../Sidebar'
import { Icon } from '../Icons'
// import Footer from './Footer'

// Styles
import { Wrapper, Main, Footer } from './styles.scss'

// Elements
import { Box, Flex, Text } from '../../elements'

// Begin
//////////////////////////////////////////////////////////////////////

const Year = () => {
  return new Date().getFullYear()
}

// interface RenderData {
//   site: {
//     siteMetadata: {
//       title: string
//       description: string
//     }
//   }
// }

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { title }: { title: string } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <Sidebar color="black" />
          <Main>{children}</Main>
          <Footer>
            <Box p={[4]}>
              <Icon
                name="instagram"
                color={theme.colors.white}
                className="arrow-next"
              />
              <Icon
                name="facebook"
                color={theme.colors.white}
                className="arrow-next"
              />
              <Icon
                name="twitter"
                color={theme.colors.white}
                className="arrow-next"
              />
              <Text fontSize={1} mt={3}>
                &copy; {Year()}
                <br/>
                Site by <a href="https://www.core37.agency">core37</a>
              </Text>
            </Box>
          </Footer>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}

//////////////////////////////////////////////////////////////////////
// End
