// Home page

// Imports
//////////////////////////////////////////////////////////////////////

import * as React from 'react'

// Libraries
import styled from 'styled-components'
import { useSpring, config } from 'react-spring'
import { Grid, Cell } from 'styled-css-grid'
import { lighten } from 'polished'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import GoogleMapReact from 'google-map-react'

// Components
import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import ImgMatch from '../components/ImgMatch'
import Accordion from '../components/Accordion'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import Mountains from '../components/mountains'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'
import Button from '../elements/Button'
import Divider from '../elements/Divider'

// Constants
import theme from '../../config/theme'

// Begin
//////////////////////////////////////////////////////////////////////

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text
}

const IndexPage: React.SFC = () => {
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

        <Section id="welcome">
          <Flex width={1} justifyContent="center" textAlign="center">
            <Box width={[9 / 10, 7 / 10, 6 / 10]}>
              <Heading as="h1">
                The perfect space for your event, private party or gathering in
                Tahoe
              </Heading>
              <AnchorLink href="#enquiries">
                <Button>Reserve the Venue</Button>
              </AnchorLink>
            </Box>
          </Flex>
          <MountContainer>
            <Mountains />
          </MountContainer>
        </Section>

        {/* <Box as="section" bg="black" width={1}>
          <ImgMatch
            src="dining-room.jpg"
            altText="PlayWell program state coordinator"
          />
        </Box> */}

        <Section bg="secondary" pb={4}>
          <Flex
            width={1}
            justifyContent="flex-end"
            alignItems="flex-end"
            flexWrap="wrap"
          >
            <Box width={[1, 1, 1 / 2]} pr={[0, 0, 10]}>
              <Heading as="h2">
                Located on the second floor of the Laub Building in South Lake
                Tahoe
              </Heading>
              <Text as="p">
                With our full bar and catering capabilites, we've got your party
                covered. The Venue has a max capacity of 250 guests and offers
                plenty of seating and room to boogie. We offer a full sound rig,
                can help you find the perfect DJ and have staff on hand.
              </Text>
            </Box>
            <Box width={[1, 1 / 2]}>
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

        <Box as="section" px={theme.gutter} py={4} id="amenities">
          <Grid
            columns="repeat(auto-fit,minmax(120px,1fr))"
            gap={theme.space[4]}
          >
            <Cell />
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="cocktail-d.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="cocktail-f.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="cocktail-b.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="cocktail-e.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
          </Grid>
        </Box>

        <Section pb={3}>
          <Box width={1}>
            <Heading as="h4" color={lighten(0.1, `${theme.colors.primary}`)}>
              Amenities
            </Heading>
            <List>
              <li>Fridge / Freezer</li>
              <li>Full prep kitchen </li>
              <li>Ice machine</li>
              <li>Two well bars</li>
              <li>Furniture / tables</li>
              <li>JBL (eos) sound</li>
              <li>Party lighting</li>
              <li>Glassware</li>
            </List>
          </Box>
        </Section>

        {/* <Box as="section" bg="black" width={1}>
          <ImgMatch
            src="dining-room.jpg"
            altText="PlayWell program state coordinator"
          />
        </Box> */}

        <Box
          as="section"
          bg="primary"
          px={theme.gutter}
          py={4}
          id="directions"
        >
          <Grid
            columns="repeat(auto-fit,minmax(306px,1fr))"
            gap={theme.space[4]}
          >
            <Cell>
              <Box bg="black">
                {/* <ImgMatch
                  src="map.png"
                  altText="PlayWell program state coordinator"
                /> */}
                <Box bg="black" style={{ height: '400px', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: 'AIzaSyBhFPTf9XXJ9x7SPjnyG7Vg8KaEPxKwBro'
                    }}
                    defaultCenter={{
                      lat: 38.9611384,
                      lng: -119.9425886
                    }}
                    defaultZoom={14}
                  >
                    <div />
                  </GoogleMapReact>
                </Box>
              </Box>
            </Cell>
            <Cell middle={false} center={false}>
              <Box pb={4}>
                <Heading fontSize={5}>Getting here</Heading>
              </Box>
              <Box>
                <Heading fontSize={5}>31 US-50</Heading>
                <Text as="p">Stateline, NV 89449</Text>
              </Box>
            </Cell>
          </Grid>
        </Box>

        <Section bg="secondary" id="enquiries" pb={4}>
          <Flex
            width={1}
            justifyContent="flex-end"
            alignItems="flex-end"
            flexWrap="wrap"
          >
            <Box width={[1, 1, 1 / 2]} pr={[0, 0, 10]} pb={[4, 4, 0]}>
              <Heading as="h4" className="text--xl">
                Get in touch
              </Heading>
              <Text>
                Drop us a line if you'd like to book The Venue or see how we can
                help plan your event.
              </Text>
            </Box>
            <Box width={[1, 1, 1 / 2]}>
              <ContactForm />
            </Box>
          </Flex>
        </Section>

        <Divider bg="primary" py={5} />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

// IndexPage.defaultProps = {
//   center: {
//     lat: 59.95,
//     lng: 30.33
//   },
//   zoom: 11
// }

const List = styled.ul`
  /* border-top: 1px solid ${theme.colors.text}; */

  li {
    /* border-bottom: 1px solid ${theme.colors.text}; */
    /* color: #96a6b3; */
    font-size: ${theme.fontSizes[3]};
    display: inline-block;
    padding: ${theme.space[2]} 0;
    width: 50%;

    @media (min-width: calc(${theme.breakpoints[1]} + 1px)) {
      font-size: ${theme.fontSizes[5]};
      width: 33%;
    }
  }
`

const MountContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 8rem;
  overflow: hidden;

  svg {
    fill: #485763;
    transform: scale(2);
  }
`

// Hero Slides
const heroSlides = [
  { src: 'hero-venue.jpg', altText: 'The Venue at Tahoe event space.' },
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
