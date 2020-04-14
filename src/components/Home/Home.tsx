// Home:

// Imports
// ___________________________________________________________________

// Core
import * as React from 'react'

// Libraries
import { Grid, Cell } from 'styled-css-grid'
import { lighten } from 'polished'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import YouTube from 'react-youtube'

// Components
import ImgMatch from '../ImgMatch'
import Section from '../Section'
import Accordion from '../Accordion'
import Hero from '../Hero'
import ContactForm from '../ContactForm'
import Mountains from '../mountains'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../../elements'
import Button from '../../elements/Button'
import Divider from '../../elements/Divider'

// Theme
import theme from '../../../config/theme'

// Styles
import * as S from './styles.scss'

// Begin Component
// ___________________________________________________________________

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.primary,
  borderColor: theme.colors.text
}

const Home: React.SFC = () => {
  const Options = {
    height: '600',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }
  return (
    <Box>
      <Hero slides={heroSlides} />

      <Section pt={6} pb={6} id="welcome">
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
        <S.MountContainer>
          <Mountains />
        </S.MountContainer>
      </Section>

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
              With our full bar and catering capabilities, we've got your party
              covered! The Venue is an elegant, indoor, 3,200 square-foot venue
              with an immense 250 person capability. We offer a state of the art
              sound system, mood lighting and a privatized staff ready to
              assist. Our team of pros are here to help.
            </Text>
          </Box>
        </Flex>
      </Section>

      <Box as="section" px={theme.gutter}>
        <Grid columns="repeat(auto-fit,minmax(120px,1fr))" gap={theme.space[4]}>
          <Cell>
            <Box bg="black">
              <ImgMatch
                src="interior--d.jpg"
                altText="The Venue at South Lake Tahoe Party Venue"
              />
            </Box>
          </Cell>
          <Cell>
            <Box bg="black">
              <ImgMatch
                src="interior--a.jpg"
                altText="The Venue at South Lake Tahoe Party Venue"
              />
            </Box>
          </Cell>
          <Cell>
            <Box bg="black">
              <ImgMatch
                src="interior--b.jpg"
                altText="The Venue at South Lake Tahoe Party Venue"
              />
            </Box>
          </Cell>
          <Cell>
            <Box bg="black">
              <ImgMatch
                src="interior--c.jpg"
                altText="The Venue at South Lake Tahoe Party Venue"
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

      <Box width={1}>
        <YouTube videoId="XXvWPup3UU8" opts={Options} />
      </Box>

      {/* <Box as="section" px={theme.gutter} id="amenities">
        <Grid columns="repeat(auto-fit,minmax(120px,1fr))" gap={theme.space[4]}>
          <Cell>
            <Box bg="black">
              <ImgMatch
                src="cocktail-d.jpg"
                altText="The Venue at South Lake Tahoe Party Venue"
              />
            </Box>
          </Cell>
          <Cell>
            <Box bg="black">
              <ImgMatch
                src="cocktail-f.jpg"
                altText="The Venue at South Lake Tahoe Party Venue"
              />
            </Box>
          </Cell>
          <Cell>
            <Box bg="black">
              <ImgMatch
                src="cocktail-b.jpg"
                altText="The Venue at South Lake Tahoe Party Venue"
              />
            </Box>
          </Cell>
          <Cell>
            <Box bg="black">
              <ImgMatch
                src="cocktail-e.jpg"
                altText="The Venue at South Lake Tahoe Party Venue"
              />
            </Box>
          </Cell>
        </Grid>
      </Box> */}

      <Section>
        <Box width={1}>
          <Heading as="h4" color={lighten(0.1, `${theme.colors.primary}`)}>
            Amenities
          </Heading>
          <S.List>
            <li>Fridge / Freezer</li>
            <li>Full prep kitchen </li>
            <li>Ice machine</li>
            <li>Two well bars</li>
            <li>Furniture / tables</li>
            <li>JBL (eos) sound</li>
            <li>Party lighting</li>
            <li>Glassware</li>
          </S.List>
        </Box>
      </Section>

      {/* <Hero slides={heroSlides} /> */}

      <Box py={[6, 6, 7]} px={4} id="directions">
        <Flex
          width={1}
          justifyContent="flex-end"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box width={[1, 1, 1 / 2]} pr={[0, 0, 7]} pb={[6, 6, 0]}>
            <Heading
              as="h4"
              color={lighten(0.1, `${theme.colors.primary}`)}
              pb={4}
            >
              Getting here
            </Heading>
            <Box mb={6}>
              <Heading fontSize={5} color="white">
                31 US-50
              </Heading>
              <Text as="p" color="white">
                Stateline, NV 89449
              </Text>
              <Text>
                Take HWY 50 to downtown South Lake Tahoe. We are located next to
                Montbleu
              </Text>
            </Box>
            <a href="https://goo.gl/maps/NGQeWiQS8NdNYvkx7" target="_blank">
              <Button>Get Directions</Button>
            </a>
          </Box>
          <Box width={[1, 1, 1 / 2]}>
            <Box bg="black">
              <a href="https://goo.gl/maps/NGQeWiQS8NdNYvkx7" target="_blank">
                <ImgMatch
                  src="theVenue__map.png"
                  altText="The Venue at South Lake Tahoe Party Venue"
                />
              </a>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Section bg="secondary" id="enquiries" pt={4} pb={4}>
        <Flex
          width={1}
          justifyContent="flex-end"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box width={[1, 1, 1 / 2]} pr={[0, 0, 10]} pb={[4, 4, 0]}>
            <Heading
              as="h4"
              color={lighten(0.1, `${theme.colors.primary}`)}
              pb={4}
            >
              Enquiries
            </Heading>
            <Heading as="h2">
              Get in touch today and let's plan your perfect party.
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
    </Box>
  )
}

export default Home

// IndexPage.defaultProps = {
//   center: {
//     lat: 59.95,
//     lng: 30.33
//   },
//   zoom: 11
// }

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

// ___________________________________________________________________
// End
