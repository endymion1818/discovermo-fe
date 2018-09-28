import React from 'react'
import Helmet from 'react-helmet'
import * as variable from '../components/variables'
import Layout from '../components/Templates/Layout'
import Link from '../components/Molecules/Link'
import * as atom from '../components/Atoms'

import Masthead from '../components/Organisms/Masthead'
import ColumnsOne from '../components/Organisms/ColumnsOne'

export const frontmatter = {
  title: "Usage & Cookies",
  path: "usage-cookies",
  description: "Contract for using this website and cookie policy.",
  inMainNav: false,
  menuOrder: 3,
  categories: [
    'insitemenu',
  ]
}

const usage = props => (
  <Layout>
    <Helmet>
      <title>Usage &amp; Cookies | { props.data.site.siteMetadata.title }</title>
      <meta name="description" content="Contract for using this website and cookie policy." />
    </Helmet>
    <Masthead
        title="Usage &amp; Cookies"
        intro="Contract for using this website and cookie policy"
        textColor={variable.BRAND_SECONDARY}
    />
    <atom.HeadingPrimary>Site Use Policy and Cookie Information</atom.HeadingPrimary>
    <atom.Paragraph>About This Website.</atom.Paragraph>
    <atom.Band>
        <atom.Container>
          <ColumnsOne
              col1={{
              content: 
                  <>
                  test
                  </>
              }}
          />
        </atom.Container>
    </atom.Band>
  </Layout>
)

export default usage

export const query = graphql`
query cookiesQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`