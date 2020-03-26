// Sidebar:
// Main site sidebar with logo and navigation

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

// Libraries
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Hooks
import useScrollWatch from '../../hooks/useScrollWatch'

// Components
import Logo from '../logo'

// Elements
import { Box, Flex } from '../../elements'

// Theme
import theme from '../../../config/theme'

// Styles
import { SideBarInner, Nav } from './styles.scss'

// Begin Component
//////////////////////////////////////////////////////////////////////

const defaultProps = {
  color: '#ffffff'
}

type Props = {
  color?: string
  navData: {
    node: {
      name: string
      link: string
    }
  }[]
} & typeof defaultProps

interface CallbackTypes {
  callbackData: any
  previousScrollTop: number
  currentScrollTop: number
}

const Sidebar: React.SFC<Props> = ({ color, navData }) => {
  // On scroll class change
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowBackground, setShouldShowBackground] = useState(false)

  // scrollWatch settings
  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  // scrollWatch hook to watch for page scroll
  useScrollWatch((callbackData: CallbackTypes) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowBackground(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  // Scroll state styles
  const backgroundStyle = shouldShowBackground
    ? theme.colors.background
    : theme.colors.primary
  const hiddenStyle = shouldHideHeader
    ? theme.colors.primary
    : theme.colors.primary
  return (
    <SideBarInner bg={backgroundStyle} as="aside" px={theme.gutter} py={[2, 4]}>
      <Flex
        flexWrap="nowrap"
        flexDirection={['row', 'row', 'row', 'column']}
        alignItems={['center', 'center', 'center', 'flex-start']}
        justifyContent="space-between"
        className="nav__container"
      >
        <Box width={1} className="logo">
          <Link to="/" aria-label="The Venue, Back to Home">
            <Logo />
          </Link>
        </Box>
        <Nav as="nav" color={color}>
          {navData.map(({ node: item }) => (
            <AnchorLink href={item.link} key={item.name}>
              {item.name}
            </AnchorLink>
          ))}
        </Nav>
      </Flex>
    </SideBarInner>
  )
}

export default Sidebar

Sidebar.defaultProps = defaultProps

//////////////////////////////////////////////////////////////////////
// End
