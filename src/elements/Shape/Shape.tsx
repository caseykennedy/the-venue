// Sidebar:
// Main site navigation

// Imports
// ___________________________________________________________________

// Core
import React from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
}

// Begin Component
// ___________________________________________________________________

const Shape = ({
  speed,
  offset,
  factor,
  bg,
  fill,
  clipPath,
  children,
  className
}: DividerProps) => (
  <ParallaxLayer
    speed={speed}
    offset={offset}
    factor={factor || 1}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Shape

// ___________________________________________________________________
// End
