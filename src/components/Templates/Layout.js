import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

import exoRegular from '../../fonts/Exo2-Regular.woff2'
import exoExtraBold from '../../fonts/Exo2-ExtraBold.woff2'

injectGlobal`
  @font-face {
    font-family: 'exo';
    src: url(${exoRegular});
  }
  @font-face {
    font-family: 'exoBold';
    src: url(${exoExtraBold});
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 17px;
  }
  body {
    margin: 0;
    font-family: 'exo';
  }
  h1,
  h2,
  h3 {
    font-family: 'exoBold';
    font-weight: 700;
  }
`;

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        mainNav: allJavascriptFrontmatter(
          filter: { frontmatter:{ inMainNav:{ eq: true } } }
          sort:{ fields:frontmatter___menuOrder }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                description
              }
            }
          }
        }
        siteMenu: allJavascriptFrontmatter(
          filter: { frontmatter:{ categories:{ eq: "insitemenu" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} navItems={data.mainNav}/>
          {children}
        <Footer siteTitle={data.site.siteMetadata.title} navItems={data.mainNav} siteMenu={data.siteMenu}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
