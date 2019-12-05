// Home page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react'
import { animated, useSpring, config } from 'react-spring'
import { Grid, Cell } from 'styled-css-grid'

// Components
import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import Divider from '../components/Divider'
import ImgMatch from '../components/ImgMatch'
import Accordion from '../components/Accordion'
import Hero from '../components/Hero'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'

// Constants
import theme from '../../config/theme'

// Begin
//////////////////////////////////////////////////////////////////////

// Types
interface Props {}

const AccordionProps = {
  chevronColor: 'white',
  color: 'white',
  colorActive: 'white',
  borderColor: 'white'
}

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
        <Hero slides={heroSlides} />
        <Section>
          <Flex justifyContent="flex-end">
            <Box width={[1, 1, 1 / 2]}>
              <Heading as="h1">
                A restaurant five and a half meters below the surface in Norway,
                exposing you to the wonders beneath the sea.
              </Heading>
              <Text as="p">
                Half-sunken into the icy waters of Lindesnes, Under invites you
                to dine five meters below the surface..
              </Text>
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
          <Grid
            columns="repeat(auto-fit,minmax(120px,1fr))"
            gap={theme.space[4]}
          >
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
            <Box width={[1, 1, 1 / 2]}>
              <Heading as="h1">
                The perfect space for your event. The Venue is a bit of modern
                with a lot of class — our staff are friendly and attentive to
                your needs.
              </Heading>
              <Box width={1} mt={4}>
                {accordionData.map((item, index) => (
                  <Accordion title={item.title} key={index} {...AccordionProps}>
                    <Box pt={3}>{item.body}</Box>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Flex>
        </Section>
        {/* <Divider bg={['magenta', 'blue', 'primary']} py={'6vh'} /> */}
        <Box as="section" px={theme.gutter} py={4}>
          <Grid
            columns="repeat(auto-fit,minmax(120px,1fr))"
            gap={theme.space[4]}
          >
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
        <Section>
          <Box width={[1, 1, 1 / 2]}>
            <Heading as="h1">We happily offer the following amenities:</Heading>
          </Box>
          <Box width={[1, 1, 1 / 2]}>
            <ul>
              <li>Fridge freezer</li>
              <li>Full prep kitchen </li>
              <li>Ice Machine</li>
              <li>Two well bars</li>
              <li>Furniture and tables</li>
              <li>JBL EOS sound system</li>
              <li>Party Lighting</li>
              <li>Glassware</li>
            </ul>
          </Box>
        </Section>
        <Box as="section" px={theme.gutter} py={4}>
          <Grid
            columns="repeat(auto-fit,minmax(120px,1fr))"
            gap={theme.space[4]}
          >
            <Cell>
              <Box bg="magenta">
                <ImgMatch
                  src="brutalism-c.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="hero.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
          </Grid>
        </Box>
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

// Hero Slides
const heroSlides = [
  { src: 'hero.jpg', altText: 'The Venue at Tahoe event space.' },
  { src: 'hero--b.jpg', altText: 'The Venue at Tahoe event space.' }
]

// Accordion
const accordionData = [
  {
    title: 'Private Events',
    body:
      'The Venue at Tahoe event space. A restaurant five and a half meters below the surface in Norway, exposing you to the wonders beneath the sea.'
  },
  {
    title: 'Receptions',
    body:
      'The Venue at Tahoe event space. A restaurant five and a half meters below the surface in Norway, exposing you to the wonders beneath the sea.'
  },
  {
    title: 'Gatherings',
    body:
      'The Venue at Tahoe event space. A restaurant five and a half meters below the surface in Norway, exposing you to the wonders beneath the sea.'
  }
]

//////////////////////////////////////////////////////////////////////
// End
