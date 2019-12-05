// Sidebar:
// Main site navigation

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import Slider from 'react-slick'

// Components
import ImgMatch from '../ImgMatch'
import { Icon } from '../Icons'

// Elements
import { Box, Flex } from '../../elements'

// Theme
import theme from '../../../config/theme'

// Styles
import { HeroContainer } from './styles.scss'
import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// Begin Component
//////////////////////////////////////////////////////////////////////

const defaultProps = {
  src: 'hero.jpg',
  altText: 'The Venue at Tahoe event space.'
}

type Props = {
  slides: { src: string; altText: string }[]
} & typeof defaultProps

const Hero: React.SFC<Props> = ({ slides }) => {
  const settings = {
    arrows: true,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    adaptiveHeight: false
  }
  return (
    <HeroContainer>
      <Grid columns="repeat(auto-fit,minmax(120px,1fr))">
        <Cell>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <Box key={index}>
                <ImgMatch src={slide.src} altText={slide.altText} />
                {/* <Box mt={3}>
                  <Icon
                    name="carat"
                    color={theme.colors.primary}
                    className="arrow-prev"
                  />
                  <Icon
                    name="carat"
                    color={theme.colors.primary}
                    className="arrow-next"
                  />
                </Box> */}
              </Box>
            ))}
          </Slider>
        </Cell>
      </Grid>
    </HeroContainer>
  )
}

export default Hero

Hero.defaultProps = defaultProps

//////////////////////////////////////////////////////////////////////
// End
