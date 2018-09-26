import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

import exoRegular from '../../fonts/Exo2-Regular.woff2'

injectGlobal`
  @font-face {
    font-family: 'exo';
    src: url(${exoRegular});
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
        allJavascriptFrontmatter(
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
        <Header siteTitle={data.site.siteMetadata.title} navItems={data.allJavascriptFrontmatter}/>
          {children}
        <Footer siteTitle={data.site.siteMetadata.title} navItems={data.allJavascriptFrontmatter}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout