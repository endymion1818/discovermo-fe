import React from 'react'
import Helmet from 'react-helmet'
import * as variable from '../components/variables'
import Layout from '../components/Templates/Layout'
import Link from '../components/Molecules/Link'
import * as atom from '../components/Atoms'

import Masthead from '../components/Organisms/Masthead'

export const frontmatter = {
  title: "NOT FOUND",
  path: "404",
  description: "Page not found",
  inMainNav: false
}

const NotFoundPage = props => (
  <Layout>
    <Helmet>
      <title>NOT FOUND | { props.data.site.siteMetadata.title }</title>
      <meta name="description" content="Page not found." />
    </Helmet>
    <Masthead
        title="NOT FOUND"
        intro="Page not found"
        textColor={variable.BRAND_SECONDARY}
    />
    <atom.Band>
      <atom.Container>
        <atom.Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</atom.Paragraph>
        <atom.Paragraph>You might want to check out the <Link to="/sitemap">sitemap</Link>, or go back to the <Link to="/"> homepage</Link>.</atom.Paragraph>
      </atom.Container>
    </atom.Band>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
query notFoundPageQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`