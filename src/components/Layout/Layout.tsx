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
        <div style={{ display: 'none' }}>
          <form
            name="Contact Form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact-form"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="Contact Form" />

            <fieldset>
              <Box width={1} className="form-group">
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="name">
                    Name:{' '}
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required={true}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="date">
                    Date:{' '}
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>

                  <input
                    name="date"
                  />
                </Box>
              </Box>

              <Box width={1} className="form-group">
                <label htmlFor="comments">Tell us about your event: </label>
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Tell us about your event"
                />
              </Box>

              <Box width={1} className="form-group">
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="email">
                    Email:
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>

                  <input
                    name="email"
                    placeholder="Your email"
                    type="email"
                    required={true}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="___ ___-____"
                  />
                </Box>
              </Box>

              <button type="submit" value="Submit Request">
                Submit Request
              </button>
            </fieldset>
          </form>
        </div>
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
