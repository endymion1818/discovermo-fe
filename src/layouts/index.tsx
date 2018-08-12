import * as React from 'react'
import Helmet from 'react-helmet'

<<<<<<< HEAD:src/layouts/index.tsx
import Container from '../components/Container'
import Header from '../components/header'
import Footer from '../components/footer'
import './normalise.scss'
import './globals.scss'
=======
import Header from '../components/Templates/Header'
import Footer from '../components/Templates/Footer'
import {Container} from '../components/Atoms'
import './index.scss'
>>>>>>> 2827e959d7cc68a74913334d0cc4e4fa3a6af6ab:src/layouts/index.js

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  },
  children: any
}

const Layout: React.StatelessComponent<{children, data}> = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
<<<<<<< HEAD:src/layouts/index.tsx
        {children()}
=======
      {children()}
>>>>>>> 2827e959d7cc68a74913334d0cc4e4fa3a6af6ab:src/layouts/index.js
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
  }
`
