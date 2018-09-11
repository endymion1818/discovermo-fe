import React from 'react'
import Link from '../Molecules/Link'


import * as atom from '../Atoms'
import * as variable from '../variables'

import WhiteLogo from '../../img/discovermikeoldfield-logo-white.svg'

const Footer = ({ siteTitle }) => (
  <atom.Band backgroundColor={variable.BRAND_PRIMARY}>
    <atom.Container
      color="primary"
    >
    <Link to="/">
      <img src={WhiteLogo} alt={siteTitle} width="180" height="auto"/>
    </Link>
    </atom.Container>
  </atom.Band>
)

export default Footer
