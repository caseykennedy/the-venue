// Elements:
// Box and Flex layout components using Styled System

// Imports
//////////////////////////////////////////////////////////////////////

import styled from 'styled-components'
import { animated } from 'react-spring'

// Config
import theme from '../../config/theme'

import {
  space,
  color,
  width,
  flex,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  textAlign,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  display,
  position,
  overflow,
  SpaceProps,
  ColorProps,
  WidthProps,
  FlexProps,
  AlignSelfProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  TextAlignProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  MaxWidthProps,
  DisplayProps, 
  PositionProps,
  OverflowProps,
  
} from 'styled-system'

// Begin Component
//////////////////////////////////////////////////////////////////////

// Box

type ElementProps = SpaceProps &
  WidthProps &
  ColorProps &
  FlexProps &
  AlignSelfProps &
  TextAlignProps &
  FontFamilyProps &
  FontSizeProps &
  MaxWidthProps &
  DisplayProps &
  PositionProps &
  FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps &
  FontWeightProps &
  LineHeightProps &
  OverflowProps


export const Box = styled.div<ElementProps>`
  box-sizing: border-box;
  height: auto;
  transition: ${theme.transition.string};
  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
  ${maxWidth}
  ${fontSize}
  ${display}
  ${position}
`

Box.displayName = 'Box'

export const AnimatedBox = styled(animated.div)<ElementProps>`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
  ${maxWidth}
  ${fontSize}
  ${display}
  ${position}
`

AnimatedBox.displayName = 'AnimatedBox'

// Flexbox

export const Flex = styled.div<ElementProps>`
  display: flex;
  box-sizing: border-box;
  height: auto;
  ${space}
  ${width}
  ${color}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${maxWidth}
  ${width}
  ${fontSize}
  ${textAlign}
  ${overflow}
`

Flex.displayName = 'Flex'

export const AnimatedFlex = styled(animated.div)<ElementProps>`
  display: flex;
  ${space}
  ${color}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${maxWidth}
  ${width}
  ${fontSize}
  ${textAlign}
  ${overflow}
`

AnimatedFlex.displayName = 'AnimatedFlex'

// Button

export const Button = styled.button<ElementProps>`
  border-radius: 1000rem;
  border: none;
  font-weight: 700;
  font-size: 1.25rem;
  ${space}
  ${width}
  ${color}
  ${overflow}
`

Button.displayName = 'Button'

// Typography

export const Heading = styled.div<ElementProps>`
  box-sizing: border-box;
  font-weight: 400;
  display: block;
  transition: ${theme.transition.string};
  ${space}
  ${color}
  ${textAlign}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${maxWidth}
  ${width}
`

Box.displayName = 'Heading'

export const Text = styled.div<ElementProps>`
  box-sizing: border-box;
  display: block;
  transition: ${theme.transition.string};
  ${space}
  ${color}
  ${textAlign}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${maxWidth}
  ${width}
`

Box.displayName = 'Text'

//////////////////////////////////////////////////////////////////////
// End Component
