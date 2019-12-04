// Home page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react'

// Libraries
import { animated, useSpring, config } from 'react-spring'
import { Grid, Cell } from 'styled-css-grid'

// Components
import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import Divider from '../components/Divider'
import ImgMatch from '../components/ImgMatch'

// Elements
import { AnimatedBox, Box, Heading } from '../elements'

// Constants
import theme from '../../config/theme'

// Begin
//////////////////////////////////////////////////////////////////////

// Types
interface Props {}

const IndexPage: React.FunctionComponent<Props> = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <Section pt={7} pb={7}>
          <Box width={[1, 1, 2 / 3]}>
            <Heading as="h1" fontSize={[3, 4, 4]} mb={0}>
              A restaurant five and a half meters below the surface in Norway,
              exposing you to the wonders beneath the sea.
            </Heading>
          </Box>
        </Section>
        <Box as="section" px={theme.gutter} py={4}>
          <Grid columns="repeat(auto-fit,minmax(120px,1fr))" gap="2rem">
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="brutalism-a.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="brutalism-c.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
          </Grid>
        </Box>
        <Divider bg={['magenta', 'blue', 'yellow']} py={'6vh'} />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

//////////////////////////////////////////////////////////////////////
// End
