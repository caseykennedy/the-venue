// Home page

// Imports
// ___________________________________________________________________

// Core
import * as React from 'react'

// Libraries
import { useSpring, config } from 'react-spring'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../components/Home'

// Elements
import { AnimatedBox } from '../elements'

// Begin
// ___________________________________________________________________

const Index: React.FC = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <Home />
      </AnimatedBox>
    </Layout>
  )
}

export default Index

// ___________________________________________________________________
// End
