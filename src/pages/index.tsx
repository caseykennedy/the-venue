// Home page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'
import styled from 'styled-components'
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
import { AnimatedBox, Box, Flex, Heading, Text, Button } from '../elements'

// Constants
import theme from '../../config/theme'

// Begin
//////////////////////////////////////////////////////////////////////

// Types
interface Props {}

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text
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
          <Flex width={1} justifyContent="center" textAlign="center">
            <Box width={[9/10, 7 / 10, 6 / 10]}>
              <Heading as="h1">
                The perfect space for your event, private party, or gathering in
                Tahoe
              </Heading>
              <Button bg="secondary" color="white" px={5} py={3}>
                Reserve the Venue
              </Button>
              {/* <Text as="p">
                The Venue at Tahoe is a bit of modern with a lot of class.
              </Text> */}
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
                  src="body-a.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell />
            <Cell />
          </Grid>
        </Box>

        <Section bg="primary">
          <Flex justifyContent="flex-end">
            <Box width={[1, 2 / 3]}>
              <Box width={1} pl={[0, 0, 0, `calc(${theme.root.space} * 2)`]}>
                <Heading as="h2">
                  Located on the second floor of the Laub Building in South Lake
                  Tahoe.
                </Heading>
                <Text as="p">
                  With our full bar and catering capabilites, we've got your
                  party covered. The Venue has a max capacity of 250 guests and
                  offers plenty of seating and room to boogie. We offer a full
                  sound rig, can help you find the perfect DJ and have staff on
                  hand.
                </Text>
                <Box width={1} mt={4}>
                  {accordionData.map((item, index) => (
                    <Accordion
                      title={item.title}
                      key={index}
                      {...AccordionProps}
                    >
                      <Box pt={3}>{item.body}</Box>
                    </Accordion>
                  ))}
                </Box>
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
                  src="cocktail-f.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell />
            <Cell />
            <Cell />
          </Grid>
        </Box>

        <Section>
          <Flex width={1} justifyContent="flex-end">
            <Box width={[1, 2 / 3]}>
              <Flex pr={[0, 0, 0, `calc(${theme.root.space})`]}>
                {/* <Box width={[1, 1, 1 / 2, 1 / 2]} /> */}
                <Box width={[1, 1, 1 / 2, 1 / 2]}>
                  <Heading as="h3">Amenities</Heading>
                  <List>
                    <li>Fridge freezer</li>
                    <li>Full prep kitchen </li>
                    <li>Ice Machine</li>
                    <li>Two well bars</li>
                    <li>Furniture and tables</li>
                    <li>JBL EOS sound system</li>
                    <li>Party Lighting</li>
                    <li>Glassware</li>
                  </List>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Section>

        {/* <Box as="section" px={theme.gutter} pb={4}>
          <Grid
            columns="repeat(auto-fit,minmax(376px,1fr))"
            gap={theme.space[4]}
          >
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="hero-agate.jpg"
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
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="hero-agate.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
          </Grid>
        </Box> */}

        {/* <Section>
          <Flex justifyContent="flex-start">
            <Box
              width={[8 / 10, 1]}
              ml={[0, 0, 0, `calc(${theme.root.space})`]}
            >
              <Heading as="h2">The perfect space for your event.</Heading>
              <Text as="p">
                The Venue is a bit of modern with a lot of class.
              </Text>
            </Box>
          </Flex>
        </Section> */}

        <Box as="section" px={theme.gutter} pb={4}>
          <Grid
            columns="repeat(auto-fit,minmax(376px,1fr))"
            gap={theme.space[4]}
          >
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="hero-agate.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell middle={false} center={false}>
              <Box p={4}>
                <Heading as="h2">
                  Located on the second floor of the Laub Building in South Lake
                  Tahoe, the Venue at Tahoe is the perfect space for your
                  private party, gathering, or event.
                </Heading>
                <Text as="p">
                  The Venue is a bit of modern with a lot of class.
                </Text>
              </Box>
            </Cell>
          </Grid>
        </Box>
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

const List = styled.ul`
  border-top: 1px solid ${theme.colors.text};

  li {
    border-bottom: 1px solid ${theme.colors.text};
    padding: ${theme.space[2]} 0;
  }
`

// Hero Slides
const heroSlides = [
  { src: 'hero.jpg', altText: 'The Venue at Tahoe event space.' },
  { src: 'hero-agate.jpg', altText: 'The Venue at Tahoe event space.' }
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
