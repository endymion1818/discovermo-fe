import React from 'react'
import Link from 'gatsby-link'
import WhiteLogo from './disvovermikeoldfield-logo-white.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#0D3947',
      marginBottom: '1.45rem',
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

export default Header
