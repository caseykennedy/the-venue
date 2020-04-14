// Sidebar Styles:

// Imports
// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor, lighten } from 'polished'

// Constants
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
// ___________________________________________________________________

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
    a {
      display: block;
    }

    svg {
      fill: ${p => readableColor(`${p.bg}`)};
      /* width: 7rem; */
      height: 4rem;
      width: 7rem;

      @media (min-width: calc(${theme.breakpoints[2]} + 1px)) {
        height: initial;
        width: initial;
      }
    }
  }

  &.hidden {
    transform: translateY(-110%);
  }

  .nav__container {
    @media (min-width: calc(${theme.breakpoints[2]} + 1px)) {
      height: calc(100vh - (${theme.root.space} * 1.4));
    }
  }
`

export const Nav = styled(Flex)<{ color: string }>`
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;

  display: none;
  width: 100%;

  @media (min-width: calc(${theme.breakpoints[2]} + 1px)) {
    display: inherit;
  }

  a {
    text-decoration: none;
    /* text-align: center; */
    color: ${p => readableColor(`${p.color}`)};
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1.5;

    width: 100%;

    &:hover,
    &:focus,
    &.navlink-active {
      color: ${lighten(0.3, `${theme.colors.primary}`)};
    }
  }
`

// ___________________________________________________________________
// End Styles
