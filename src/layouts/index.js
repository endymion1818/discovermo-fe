import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Templates/Header'
import Footer from '../components/Templates/Footer'
import {
  Container
} from '../components/Atoms'
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

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allStrapiPost {
      edges {
        node {
          title
          content
          slug
        }
      }
    }
  }
`
