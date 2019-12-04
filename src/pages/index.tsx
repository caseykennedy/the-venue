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
import Accordion from '../components/Accordion'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'

// Constants
import theme from '../../config/theme'

// Begin
//////////////////////////////////////////////////////////////////////

// Types
interface Props {}

const IndexPage: React.SFC<Props> = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <Box as="section" px={theme.gutter} py={4}>
          <Grid columns="repeat(auto-fit,minmax(120px,1fr))" gap="2rem">
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="brutalism-c.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="brutalism-a.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
          </Grid>
        </Box>
        <Section>
          <Flex justifyContent="flex-end">
            <Box width={[1, 1, 2 / 3]} pr={[2, 4, 5]}>
              <Heading as="h1" fontSize={[3, 4, 4]}>
                A restaurant five and a half meters below the surface in Norway,
                exposing you to the wonders beneath the sea.
              </Heading>
              <Text>
                Half-sunken into the icy waters of Lindesnes, Under invites you
                to dine five meters below the surface.
              </Text>
              <Box width={1} mt={4}>
                <Accordion title="Feature">
                  <Box p={4} bg="#111111">Feature</Box>
                </Accordion>
                <Accordion title="Feature">
                  <Box p={4}>Feature</Box>
                </Accordion>
                <Accordion title="Feature">
                  <Box p={4}>Feature</Box>
                </Accordion>
              </Box>
            </Box>
          </Flex>
        </Section>
        {/* <Box as="section" bg="black" width={1}>
          <ImgMatch
            src="dining-room.jpg"
            altText="PlayWell program state coordinator"
          />
        </Box> */}
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
            <Cell />
            <Cell />
          </Grid>
        </Box>
        <Section>
          <Flex justifyContent="flex-end">
            <Box width={[1, 1, 2 / 3]} pr={[2, 4, 5]}>
              <Heading as="h1" fontSize={[3, 4, 4]}>
                The perfect space for your event. The Venue is a bit of modern
                with a lot of class — our staff are friendly and attentive to
                your needs.
              </Heading>
              <Text>
                Half-sunken into the icy waters of Lindesnes, Under invites you
                to dine five meters below the surface.
              </Text>
            </Box>
          </Flex>
        </Section>
        <Box as="section" px={theme.gutter} py={4}>
          <Grid columns="repeat(auto-fit,minmax(120px,1fr))" gap="2rem">
            <Cell />
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="brutalism-c.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell />
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
