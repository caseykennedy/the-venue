// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react'

// Styles
import IconStyle from './styles.scss'

// Icon Files
import Carat from './SVG/Carat'
import Pin from './SVG/Pin'
import Facebook from './SVG/Facebook'
import Instagram from './SVG/Instagram'
import Twitter from './SVG/Twitter'
import NextArrow from './SVG/NextArrow'

// Begin
//////////////////////////////////////////////////////////////////////

export const Icon = ({ name, className, color, fas }) => {
  switch (name) {
    case 'carat':
      return (
        <IconStyle color={color}>
          <Carat />
        </IconStyle>
      )
    case 'pin':
      return (
        <IconStyle className=" ico ico-pin">
          <Pin />
        </IconStyle>
      )
    case 'nextArrow':
      return (
        <IconStyle className="ico">
          <NextArrow />
        </IconStyle>
      )
    case 'facebook':
      return (
        <IconStyle className="ico ico-facebook">
          <Facebook />
        </IconStyle>
      )
    case 'twitter':
      return (
        <IconStyle className="ico ico-twitter">
          <Twitter />
        </IconStyle>
      )
    case 'instagram':
      return (
        <IconStyle className="ico ico-instagram">
          <Instagram />
        </IconStyle>
      )
    default:
      return (
        <IconStyle color={color} className="ico">
          <i className={fas ? 'fas fa-' + name : 'fas fab fa-' + name} />
        </IconStyle>
      )
  }
}

//////////////////////////////////////////////////////////////////////
// End
