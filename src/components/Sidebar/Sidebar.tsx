// Sidebar:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

// Tools
// import { readableColor } from 'polished'

// Utilities
import useDocumentScrollThrottled from '../../utils/useDocumentScrollThrottled'

// Components
import Logo from '../logo'

// Styles
import { SideBarInner, Nav } from './styles.scss'

// Elements
import { Box, Flex } from '../../elements'

// Config
import theme from '../../../config/theme'

// Begin Component
//////////////////////////////////////////////////////////////////////

const defaultProps = {
  color: '#ffffff'
}

type Props = {
  color?: string
} & typeof defaultProps

interface QueryResult {
  navigation: {
    edges: {
      node: {
        name: string
        link: string
      }
    }[]
  }
}

interface CallbackTypes {
  callbackData: any
  previousScrollTop: number
  currentScrollTop: number
}

const Sidebar: React.SFC<Props> = ({ color }) => {
  // Navigation data hook
  const data: QueryResult = useStaticQuery(query)

  // On scroll class change
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowBackground, setShouldShowBackground] = useState(false);

  // Initial scroll settings
  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  // Scroll watch
  useDocumentScrollThrottled((callbackData: CallbackTypes) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowBackground(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  
  // Scroll state styles
  const backgroundStyle = shouldShowBackground ? 'magenta' : 'transparent';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';
  return (
    <SideBarInner bg={backgroundStyle} as="aside" p={[4]}>
      <Flex
        flexWrap="nowrap"
        flexDirection={['row', 'row', 'row', 'column']}
        alignItems={['center', 'center', 'center', 'flex-start']}
        justifyContent="space-between"
      >
        <Box width={['3rem', '4rem', '5rem', '6rem']}>
          <Link to="/" aria-label="LekoArts, Back to Home">
            <Logo />
          </Link>
        </Box>
        <Nav
          color={color}
          mt={[0, 0, 0, 10]}
          as="nav"
          flexWrap="nowrap"
          flexDirection={['column']}
          alignItems="flex-start"
        >
          {data.navigation.edges.map(({ node: item }) => (
            <Link to={item.link} key={item.name} activeClassName="nav--active">
              {item.name}
            </Link>
          ))}
        </Nav>
      </Flex>
    </SideBarInner>
  )
}

export default Sidebar

Sidebar.defaultProps = defaultProps

const query = graphql`
  query LayoutQuery {
    navigation: allNavigationYaml {
      edges {
        node {
          name
          link
        }
      }
    }
  }
`

//////////////////////////////////////////////////////////////////////
// End
