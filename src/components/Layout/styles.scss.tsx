// Layout Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';
import { lighten } from 'polished'

// Constants
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${theme.sidebarWidth.big} 1fr;
  @media (max-width: ${theme.breakpoints[4]}) {
    grid-template-columns: ${theme.sidebarWidth.normal} 1fr;
  }
  @media (max-width: ${theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`

export const Main = styled.main`
  @media (min-width: calc(${theme.breakpoints[2]} + 1px)) {
    grid-column-start: 2;
  }
`

export const Footer = styled.footer<{ color?: string[] }>`
  position: fixed;
  width: ${theme.sidebarWidth.big};
  bottom: 0;
  background: ${theme.colors.primary};
  color: ${lighten(0.3, `${theme.colors.primary}`)};

  a {
    color: ${lighten(0.3, `${theme.colors.primary}`)};
    text-decoration: none;

    &:hover {
      color: ${lighten(0.6, `${theme.colors.primary}`)};
    }
  }
  
  .ico {
    margin-right: ${theme.space[2]};
    width: ${theme.space[4]};
  }

  @media (max-width: ${theme.breakpoints[4]}) {
    width: ${theme.sidebarWidth.normal};
  }

  @media (max-width: ${theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }
`

//////////////////////////////////////////////////////////////////////
// End Styles
