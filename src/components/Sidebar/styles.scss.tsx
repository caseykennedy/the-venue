// Sidebar Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

// Constants
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SideBarInner = styled(Box)<{ bg: any }>`
  position: fixed;
  height: 100%;
  width: ${p => p.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${p => p.bg};

  @media (max-width: ${p => p.theme.breakpoints[4]}) {
    width: ${p => p.theme.sidebarWidth.normal};
  }

  @media (max-width: ${p => p.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }

  .logo {
    svg {
      fill: ${props => readableColor(`${props.bg}`)};
      width: calc(${theme.root.size});
    }
  }

  &.hidden {
    transform: translateY(-110%);
  }
`

export const Nav = styled(Flex)<{ color: string }>`
  a {
    text-decoration: none;
    color: ${props => readableColor(`${props.color}`)};
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1.5;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${p => p.theme.colors.primary};
    }
    @media (max-width: ${p => p.theme.breakpoints[2]}) {
      font-size: ${p => p.theme.fontSizes[2]};
      margin-left: ${p => p.theme.space[4]};
    }
    @media (max-width: ${p => p.theme.breakpoints[1]}) {
      font-size: ${p => p.theme.fontSizes[1]};
      margin-left: ${p => p.theme.space[3]};
    }
    @media (max-width: ${p => p.theme.breakpoints[0]}) {
      font-size: ${p => p.theme.fontSizes[0]};
      margin-left: ${p => p.theme.space[2]};
    }
  }
`

//////////////////////////////////////////////////////////////////////
// End Styles
