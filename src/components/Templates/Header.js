import React from 'react'
import Link from '../Molecules/Link'

import * as atom from '../Atoms'
import * as variable from '../variables'
import WhiteLogo from '../../img/discovermikeoldfield-logo-white.svg'


const Header = props => (
  <atom.Band 
    backgroundColor={variable.BRAND_PRIMARY}
    textColor={'white'}
  >
    <atom.Container>
    <Link to="/">
      <img src={WhiteLogo} alt={props.siteTitle} width="210" height="auto"/>
    </Link>
    {props.navItems
      ? props.navItems.edges.map(item => (
          <li key={item.node.frontmatter.path}><Link to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link></li>
        ))
    : null}
    </atom.Container>
  </atom.Band>
)

export default Header
