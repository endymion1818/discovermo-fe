import React from 'react'
import Link from '../Molecules/Link'
import styled from 'styled-components'

import * as atom from '../Atoms'
import * as variable from '../variables'

import WhiteLogo from '../../img/discovermikeoldfield-logo-white.svg'

const FooterNav = styled.ul`
  list-style: none;
  padding-left: 0;

  li {

    a {
      display: block;
      padding: ${variable.SINGLE};
      text-decoration: none;
      border-radius: ${variable.RADIUS_CORNER};
      color: white;

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

const Footer = props => (
  <atom.Band backgroundColor={variable.BRAND_PRIMARY}>
    <atom.Container>
      <atom.RowGrid columns="3">
        <atom.Column>
          <atom.HeadingTertiary textColor="white">About This Site</atom.HeadingTertiary>
          <Link to="/">
            <img src={WhiteLogo} alt={props.siteTitle} width="180" height="auto"/>
            <atom.Paragraph textColor="white">
              All music, album art and imagery &copy; their original copyright holders. This site text content, layout and design: &copy; <a href="https://deliciousreverie.co.uk">Benjamin Read</a>.
            </atom.Paragraph>
          </Link>
        </atom.Column>
        <atom.Column>
        </atom.Column>
        <atom.Column>
          <atom.HeadingTertiary textColor="white">Navigate</atom.HeadingTertiary>
          <FooterNav>
            {props.navItems
              ? props.navItems.edges.map(item => (
                  <li key={item.node.frontmatter.path}>
                    <Link activeClassName="active" to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link>
                  </li>
                ))
            : null}
            </FooterNav>
        </atom.Column>
      </atom.RowGrid>
    </atom.Container>
  </atom.Band>
)

export default Footer
