import * as React from 'react'
import Link from 'gatsby-link'

import WhiteLogo from './WhiteLogo'
import Container from './Container'

const Footer: React.StatelessComponent<{}> = () => (
  <div
    style={{
      background: '#0D3947',
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
     <WhiteLogo/>
    </Link>
    </Container>
  </div>
)

export default Footer
