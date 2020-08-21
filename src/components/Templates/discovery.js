import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import Layout from './Layout'
import * as variable from '../variables'
import * as atom from '../Atoms'
import CardsCarousel from '../Organisms/CardsCarousel'
import ColumnsTwo from '../Organisms/ColumnsTwo'

const DiscoveryTemplate = ({ data }) => (
  <Layout>
    {/* <Helmet>
      <title>
      `${data.strapiDiscovery.title} | ${data.site.siteMetadata.title}`
      </title>
      <meta name="description" content={data.strapiDiscovery.about} />
    </Helmet> */}
    <atom.Container>
      <ColumnsTwo
        col1={{
          heading: data.strapiDiscovery.Title,
          content: (
            <div
              dangerouslySetInnerHTML={{
                __html: unified()
                  .use(markdown)
                  .use(html)
                  .processSync(data.strapiDiscovery.Body),
              }}
            />
          ),
        }}
        col2={{
          content: (
            <div
              dangerouslySetInnerHTML={{
                __html: data.strapiDiscovery.Spotify,
              }}
            />
          ),
        }}
      />
    </atom.Container>
    <atom.Band
      id="recent-news"
      textColor="white"
      backgroundColor={variable.BRAND_HILIGHT}
    >
      <CardsCarousel
        posts={data.allStrapiPost.edges}
        content="Recent news about Mike Oldfield from the press and sites around the web."
      />
    </atom.Band>
  </Layout>
)

export default DiscoveryTemplate

export const query = graphql`
  query DiscoveryTemplate($id: String!) {
    strapiDiscovery(id: { eq: $id }) {
      id
      Slug
      Title
      Body
      Spotify
    }
    allStrapiPost(limit: 5, sort: { fields: [created_at], order: DESC }) {
      edges {
        node {
          Title
          Body
          Slug
          id
          created_at(formatString: "DD MMMM YYYY")
          Excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allStrapiAlbum(limit: 5) {
      edges {
        node {
          Title
          Slug
          Cover {
            publicURL
          }
        }
      }
    }
  }
`
