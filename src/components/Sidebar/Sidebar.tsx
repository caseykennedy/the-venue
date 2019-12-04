// Sidebar:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

// Tools
// import { readableColor } from 'polished'

// Components
import Logo from '../Logo'

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

const Sidebar: React.SFC<Props> = ({ color }) => {
  const data: QueryResult = useStaticQuery(query)
  return (
    <SideBarInner bg={color} as="aside" p={[4]}>
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
          flexDirection={['row', 'row', 'row', 'column']}
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
