import React from 'react'
import Link from '../Molecules/Link'

import {
  Band,
  Container
} from '../Atoms'
import * as variable from '../variables'

import WhiteLogo from '../../assets/images/discovermikeoldfield-logo-white.svg'

const Footer = ({ siteTitle }) => (
  <Band backgroundColor={variable.BRAND_PRIMARY}>
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
  </Band>
)

export default Footer