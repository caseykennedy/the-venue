// Sidebar Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

import { Icon } from '../Icons'

// Constants
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
//////////////////////////////////////////////////////////////////////

// export const AccordionContainer = styled.div<{ chevronColor: string }>`

export const AccordionContainer = styled.div`
  width: 100%;

  .accordion__inner {
    display: flex;
    flex-direction: column;

    .rotate {
      transform: rotate(90deg);
    }
  }
`

export const AccordionToggle = styled.button<{ colorActive: string }>`
  align-items: center;
  background: transparent;
  color: ${p => p.color};
  cursor: pointer;
  display: flex;
  border: none;
  outline: none;
  padding: calc(1rem / 3) calc(1rem / 4);
  transition: background-color 0.6s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &.active {
    color: ${p => p.colorActive};
  }
`

export const AccordionContent = styled(Box)<{ borderColor: string }>`
  overflow: hidden;
  transition: max-height 0.6s ease;
  border-bottom: 1px solid ${p => p.borderColor};

  .accordion-content__inner {
    margin-bottom: ${theme.space[4]};
  }
`

export const Carat = styled(Icon)<{ chevronColor: string }>`
  margin-left: auto;
  transition: transform 0.3s ease;

  svg {
    fill: ${p => p.chevronColor};
  }
`

//////////////////////////////////////////////////////////////////////
// End Styles
