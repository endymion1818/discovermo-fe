import React from 'react'
import Link from '../Molecules/Link'
import styled from 'styled-components'

import * as atom from '../Atoms'
import * as variable from '../variables'
import WhiteLogo from '../../img/discovermikeoldfield-logo-white.svg'

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  overflow-x: auto;

  li {
    
    a {
      display: block;
      padding: ${variable.SINGLE};
      text-decoration: none;
      border-radius: ${variable.RADIUS_CORNER};

      &:hover,
      &:active,
      &:focus {
        background-color: white;
        color: ${variable.BRAND_PRIMARY};
      }
      &.active {
        background-color: ${variable.BRAND_PRIMARY_LIGHT};
        color: ${variable.BRAND_PRIMARY};
      }
    }
  }
`

const HeaderContainer = styled(atom.Container)`
  overflow-x: hidden;

  @media (min-width: ${variable.BREAK_TABLET}) {
    display: flex;

    > a {
      flex: 1;
    }

    > ul {
      flex: 3;
    }
  }
`

const Header = props => (
  <atom.Band 
    backgroundColor={variable.BRAND_PRIMARY}
    textColor={'white'}
    bufferBottom={variable.HALF}

  >
    <HeaderContainer>
      <Link to="/">
        <img src={WhiteLogo} alt={props.siteTitle} width="210" height="auto"/>
      </Link>
      <MainNav>
      {props.navItems
        ? props.navItems.edges.map(item => (
            <li key={item.node.frontmatter.path}>
              <Link activeClassName="active" to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link>
            </li>
          ))
      : null}
      </MainNav>
    </HeaderContainer>
  </atom.Band>
)

export default Header
