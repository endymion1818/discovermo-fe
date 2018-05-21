import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
      {children()}
      </Container>
    <Footer siteTitle={data.site.siteMetadata.title} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
