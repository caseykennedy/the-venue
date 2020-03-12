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

type Props = {
  slides: { [key: string]: string }[]
}

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
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    mobileFirst: true
  }
  return (
    <HeroContainer>
      <Grid columns="1">
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

//////////////////////////////////////////////////////////////////////
// End

{
  /* <Grid columns="1">
  <Cell>
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Box key={index}>
          <ImgMatch src={slide.src} altText={slide.altText} />
          <Box mt={3}>
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
          </Box>
        </Box>
      ))}
    </Slider>
  </Cell>
</Grid> */
}
