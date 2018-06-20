import * as React from 'react'
import Link from 'gatsby-link'

import WhiteLogo from './discovermikeoldfield-logo-white.svg'
import Container from './Container'

const Header: React.StatelessComponent<{}> = ({ siteTitle }) => (
  <div
    style={{
      background: '#0D3947',
      marginBottom: '1.45rem',
    }}
  >
    <Container>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        padding: '2em 0'
      }}
    >
      <img src={WhiteLogo} alt={siteTitle} width="180" height="auto"/>
    </Link>
    </Container>
  </div>
)

export default Header
