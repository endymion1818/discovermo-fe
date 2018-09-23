import React from 'react'
import Link from '../Molecules/Link'

import MainNav from '../Organisms/MainNav'

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
    <MainNav links={props.allJavascriptFrontmatter.edges}/>
    </atom.Container>
  </atom.Band>
)

export default Header
