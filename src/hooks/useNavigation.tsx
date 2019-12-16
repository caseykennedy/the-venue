// useNavigation utility hook
// Hook for querying navigation data

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import { graphql, useStaticQuery } from 'gatsby'

// Begin
//////////////////////////////////////////////////////////////////////

type Props = {
  navigation: {
    edges: {
      node: {
        name: string
        link: string
      }
    }[]
  }
}

const useNavigation = () => {
  const data = useStaticQuery<Props>(graphql`
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
  `)

  return data.navigation.edges
}

export default useNavigation

//////////////////////////////////////////////////////////////////////
// End
