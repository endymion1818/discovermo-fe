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
    <atom.Band>
        <atom.Container>
          <ColumnsOne
              col1={{
              content: 
                  <>
                    <atom.HeadingSecondary>Privacy &amp; Cookies Notice</atom.HeadingSecondary>
                    <atom.Paragraph>This website deliberately tries to avoid cookies. There are no analytics tracking scripts, no sneaky font-embedded trackers, and no advertising scripts. I hope that means you can browse this site in the comfort of knowing your personal data is not being harvested.</atom.Paragraph>
                    <atom.Paragraph><strong>However.</strong> This site does use 3rd-party scripts from YouTube and Spotify to embed videos. I serve YouTube content from a "no cookie" domain provided by YouTube. Alas, there is some evidence this domain is not free from cookies as advertised.</atom.Paragraph>
                    <atom.HeadingSecondary>Fair Usage Policy</atom.HeadingSecondary>
                    <atom.Paragraph>The website is provided for use as-is with no warranty and I am not liable for any damages that may arise from using it, especially if you are a cloth-eared nincompoop.</atom.Paragraph>
                    <atom.HeadingSecondary>Contributing Policy</atom.HeadingSecondary>
                    <atom.Paragraph>All contributions to the codebase, to the content, or constructive criticism of the site in general will be gratefully recieved and will be treated with confidence and respect. I do reserve the right to not include content without explanation. No profanity or discriminatory comments of any sort please. Also, if you'd like to help me write a proper contributions policy you'd be most welcome to do so.</atom.Paragraph>
                    
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