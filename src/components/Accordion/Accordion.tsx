// Sidebar:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState, useRef } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'

// Tools
// import { readableColor } from 'polished'

// Components
import Logo from '../logo'

// Styles
import { AccordionContainer, AccordionToggle, AccordionContent } from './styles.scss'

// Elements
import { Box, Flex, Text } from '../../elements'

// Config
import theme from '../../../config/theme'

// Begin Component
//////////////////////////////////////////////////////////////////////

type Props = {
  children?: React.ReactNode
  title: string
  chevronColor?: string
  color?: string
  borderColor?: string
  colorActive?: string
} & typeof defaultProps

const defaultProps = {
  chevronColor: 'white',
  color: 'white',
  colorActive: 'white',
  borderColor: 'white'
}

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

const Accordion: React.SFC<Props> = ({
  children,
  title,
  chevronColor,
  color,
  borderColor,
  colorActive
}) => {
  // Accordion hooks
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion-icon')

  // Reference the accordion content height
  const content = useRef(null)

  // Toggle classes / height
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    )
  }
  return (
    <AccordionContainer>
      <div className="accordion__inner">
        <AccordionToggle
          className={`${setActive}`}
          onClick={toggleAccordion}
          color={color}
          colorActive={colorActive}
        >
          <Text as="span" fontWeight={500} fontSize="1.6rem">
            {title}
          </Text>
          {/* <AccordionContainer.Icon
            Name="carat"
            className={`${setRotate}`}
            chevronColor={chevronColor}
          /> */}
        </AccordionToggle>
        <AccordionContent
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          borderColor={borderColor}
        >
          <div className="accordion-content__inner">
            {children}
          </div>
        </AccordionContent>
      </div>
    </AccordionContainer>
  )
}

export default Accordion

Accordion.defaultProps = defaultProps

//////////////////////////////////////////////////////////////////////
// End
