// Sidebar:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState, useRef } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

// Tools
// import { readableColor } from 'polished'

// Components
import Logo from '../logo'

// Styles
import {
  AccordionContainer,
  AccordionToggle,
  AccordionContent,
  Carat
} from './styles.scss'

// Elements
import { Box, Flex, Text, Heading } from '../../elements'

// Config
import theme from '../../../config/theme'

// Begin Component
//////////////////////////////////////////////////////////////////////

type Props = {
  children: React.ReactNode
  title: string
  color: string
  chevronColor: string
  borderColor: string
  colorActive: string
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
          <Heading as="span" fontFamily="body" fontSize={[3, 4, 5]} pt={1} pb={2}>
            {title}
          </Heading>
          <Carat
            name="carat"
            className={`${setRotate}`}
            chevronColor={chevronColor}
          />
        </AccordionToggle>
        <AccordionContent
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          borderColor={borderColor}
        >
          <Box pb={3}>{children}</Box>
        </AccordionContent>
      </div>
    </AccordionContainer>
  )
}

export default Accordion

//////////////////////////////////////////////////////////////////////
// End
