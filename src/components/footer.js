import React from 'react'
import Link from 'gatsby-link'
import WhiteLogo from './discovermikeoldfield-logo-white.svg'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: '#0D3947',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
     <img src={WhiteLogo} alt={siteTitle} />
      
    </Link>
    </div>
  </div>
)

export default Footer
