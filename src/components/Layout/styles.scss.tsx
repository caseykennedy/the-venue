// Layout Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';
import { readableColor } from 'polished'

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

export const Footer = styled.footer<{ color: string[] }>`
  position: fixed;
  width: ${theme.sidebarWidth.big};
  bottom: 0;
  background: ${theme.colors.accent};
  /* color: ${props =>
    readableColor(`${props.color}`, `${props.theme.colors.grey}`, '#c3c3c3')}; */
  a {
    /* color: ${props => readableColor(`${props.color}`)}; */
    text-decoration: none;
    &:hover {
      color: ${theme.colors.primary};
    }
  }
  
  .ico {
    margin-right: ${theme.space[2]};
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
