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
            <Box width={[9 / 10, 9 / 10, 7 / 10]}>
              <Heading as="h1">
                The perfect space for your event, private party or gathering in
                South Lake Tahoe.
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

        <Section pt={0}>
          <Flex
            width={1}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box width={[9 / 10, 9 / 10, 7 / 10]}>
              <Heading as="h2" textAlign="center">
                Next door to Montbleu, Harrah's and Harvey's, and across the
                street from Hard Rock in downtown South Lake Tahoe.
              </Heading>
              <Text as="p" textAlign="center">
                With our full bar and catering capabilities, we've got your
                party covered! The Venue is an elegant, indoor, 3,200 square-foot
                venue with an immense 250 person capability. We offer a state of
                the art sound system, mood lighting and a privatized staff ready
                to assist. Our team of pros are here to help.
              </Text>
            </Box>
          </Flex>
        </Section>

        <Box as="section" px={theme.gutter}>
          <Grid
            columns="repeat(auto-fit,minmax(120px,1fr))"
            gap={theme.space[4]}
          >
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="interior--d.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="interior--a.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="interior--b.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="interior--c.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
          </Grid>
        </Box>

        <Section id="services">
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 1 / 2]} pr={[0, 0, 6]} pb={[6, 6, 0]}>
              <Heading as="h4" color={lighten(0.1, `${theme.colors.primary}`)}>
                Services
              </Heading>
              <Box width={1} mt={4}>
                {services.map((item, index) => (
                  <Accordion title={item.title} key={index} {...AccordionProps}>
                    <Box pt={3}>
                      <Text as="p" fontSize={3}>
                        {item.body}
                      </Text>
                    </Box>
                  </Accordion>
                ))}
              </Box>
            </Box>
            <Box width={[1, 1, 1 / 2]}>
              <Heading as="h4" color={lighten(0.1, `${theme.colors.primary}`)}>
                Frequently asked
              </Heading>
              <Box width={1} mt={4}>
                {faq.map((item, index) => (
                  <Accordion title={item.title} key={index} {...AccordionProps}>
                    <Box pt={3}>
                      <Text as="p" fontSize={3}>
                        {item.body}
                      </Text>
                    </Box>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Flex>
        </Section>

        <Box as="section" px={theme.gutter} id="amenities">
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

        <Box as="section" bg="primary" px={theme.gutter} py={4} id="directions">
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

// Services
const services = [
  {
    title: 'Private Events',
    body:
      "We offer customizable alcoholic beverage and food catering packages so The Venue becomes YOUR venue. Need a DJ? We've got you covered. Photographer/Videographer packages available as well."
  },
  {
    title: 'After Parties',
    body:
      "The perfect After Party--No Curfew--go 24 hours if you'd like. Make it the pre-party--Walking distance from the local bars and clubs--upstairs from Xhale, Lucky Beaver, and Aleworx. Next door to Peak and Opal. Let us help you throw the party of your dreams!"
  },
  {
    title: 'Receptions',
    body:
      'Host your destination wedding and get a free estimate based on your select options. Invite the extended family for the reception! Would it be too weird if it was the same place you threw your bachelorette/bachelor party!? Low group pricing. Free parking.'
  },
  {
    title: 'Gatherings',
    body:
      'Need the perfect holiday party location? Have a corporate function that needs an all inclusive venue? Company brunch before a day on the slopes? Family Re-union? Come see what we have to offer at The Venue. '
  }
]

// FAQ
const faq = [
  {
    title: 'When did you open?',
    body: "We are Lake Tahoe's newest (and best) venue, we just opened in 2020."
  },
  {
    title: 'Do you have a liquor license?',
    body: 'Yes.'
  },
  {
    title: 'Can the Venue help us book rooms / lodging? ',
    body: "Yes, we're here to help with whatever you need! just reach out."
  },
  {
    title: 'How far are local clubs and nightlife?',
    body:
      'Right upstairs from Xhale, Lucky Beaver, and Aleworx. Next door to Peak and Opal.'
  },
  {
    title: 'How far is the Venue from Heavenly Ski Resort?',
    body: 'Just a five minute walk away.'
  },
  {
    title: 'How much is parking?',
    body: 'FREE!'
  },
  {
    title: 'Is there a curfew?',
    body: 'NOPE — party for 24 hours if you like.'
  },
  {
    title: 'Can you help with staffing? ',
    body:
      'Photographers, DJs, bartenders, waitresses, security... whatever you need.'
  }
]

//////////////////////////////////////////////////////////////////////
// End
