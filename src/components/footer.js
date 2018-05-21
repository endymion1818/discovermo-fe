import React from 'react'
import Link from 'gatsby-link'

import Container from './container'
import WhiteLogo from './discovermikeoldfield-logo-white.svg'

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: '#0D3947',
    }}
  >
    <Container
      color="primary"
    >
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
     <img src={WhiteLogo} alt={siteTitle} width="180" height="auto"/>
    </Link>
    </Container>
  </footer>
)

export default Footer
